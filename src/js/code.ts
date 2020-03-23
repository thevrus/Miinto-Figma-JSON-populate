import { getRandomDate, getRandomTime, getRandomOrder, getRandomGtin, getRandomEmoji } from './utils';

figma.showUI(__html__, {
  width: 300,
  height: 372
});

figma.ui.onmessage = async msg => {

  const selections = figma.currentPage.selection;
  const selectionsLength = selections.length;

  switch (msg.type) {

    case 'check-selection':

      if (selectionsLength > 0) {
        figma.ui.postMessage("populate");
      }
      else {
        figma.notify("Select at least one Frame or Group 👆");
      }

      break;

    case 'populate':
      if (msg.response.products.list.length > 0) {

        let itemsList = msg.response.products.list;
        let images = msg.images;

        function traverse(node, i) {
          const nodeType = node.type;

          if (nodeType === 'GROUP' || nodeType === 'FRAME') {
            for (const child of node.children) traverse(child, i);

          }
          else if (nodeType === "TEXT" && node.name.indexOf("$") === 0) {
            replaceText(node, i);

          } else if (nodeType === "RECTANGLE" && node.name.indexOf("$") === 0) {
            replaceImage(node, i)
          }
        }

        async function replaceText(node, i) {
          let nodeName = node.name.replace("$", "");
          await figma.loadFontAsync(node.fontName);
          node.characters = String(itemsList[i][nodeName]);
        }

        function replaceImage(node, i) {
          let imageHash = figma.createImage(new Uint8Array(images[i])).hash;
          let scaleMode = node.fills.scaleMode || "FIT";

          node.fills = [
            { type: "IMAGE", scaleMode, imageHash }
          ];
        }

        if (selectionsLength > 0) {
          images.length = selectionsLength;
          itemsList.length = selectionsLength;

          itemsList = itemsList.map((item) => {
            return {
              title: item.title,
              brand: item.brand,
              discount_percent: item.discount_percent,
              price: item.price.price,
              price_before: item.price.price_before,
              url: item.url,
              id: item.id,
              meta_id: item.meta_id,
              photo_url: item.photo_url,
              date: getRandomDate(),
              time: getRandomTime(),
              order_id: getRandomOrder(),
              gtin_12: getRandomGtin()
            }
          });

          let i = 0;

          for (const node of figma.currentPage.selection as any) {

            for (const childNode of node.children) {
              traverse(childNode, i);
            }

            i++;
          }

          figma.notify(`Updated ${selectionsLength} items ${getRandomEmoji()}`);
          figma.ui.postMessage("toggleSpinner");

        }
      }
      else {
        figma.notify("Something went wrong, sorry 😒");
        figma.ui.postMessage("toggleSpinner");
      }
      break;

    case 'rename-layer':
      if (selectionsLength > 0) {
        figma.currentPage.selection.forEach(layer => {
          layer.name = msg.value;
          figma.notify(`Changed name to: ${msg.value} 🖍`);
        });

      } else {
        figma.notify("Select a layer to rename 👆");
      }
      break;

    case 'replace-text':
      figma.currentPage.selection.forEach(node => {
        if (node.type === 'TEXT') {
          replaceText(node);
        }
      });

      async function replaceText(node) {
        await figma.loadFontAsync(node.fontName);
        node.characters = String(msg.value);
      }
      break;

    case 'replace-img':
      figma.currentPage.selection.forEach(node => replaceImage(node));

      function replaceImage(node) {
        let data = msg.value as Uint8Array;
        let imageHash = figma.createImage(new Uint8Array(data)).hash;
        let scaleMode = node.fills.scaleMode || "FIT";

        node.fills = [
          { type: "IMAGE", scaleMode, imageHash }
        ]
      }

      break;

    case 'notify':
      figma.notify(msg.value);
      break;
  }
};
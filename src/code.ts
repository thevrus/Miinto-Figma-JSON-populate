figma.showUI(__html__, {
  width: 300,
  height: 276
});

figma.ui.onmessage = async msg => {

  if (msg.status === 200 && msg.response) {

    const response = await JSON.parse(msg.response);
    const selectionsLength = figma.currentPage.selection.length;
    let list = response.products.list;
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
      node.characters = String(list[i][nodeName]);
    }

    function replaceImage(node, i) {
      let data = images[i] as Uint8Array;
      let imageHash = figma.createImage(new Uint8Array(data)).hash;
      let scaleMode = node.fills.scaleMode || "FIT";

      node.fills = [
        { type: "IMAGE", scaleMode: scaleMode, imageHash }
      ];
    }

    if (selectionsLength > 0) {
      images.length = selectionsLength;
      list.length = selectionsLength;

      list = list.map((item) => {
        return {
          title: item.title,
          brand: item.brand,
          discount_percent: item.discount_percent,
          price: item.price.price,
          price_before: item.price.price_before,
          url: item.url,
          id: item.id,
          meta_id: item.meta_id,
          photo_url: item.photo_url
        }
      });

      let i = 0;

      for (const node of figma.currentPage.selection) {

        for (const childNode of node.children) {
          traverse(childNode, i);
        }

        i++;
      }

      const emojis = ['🤘', '🙌', '👌', '💅', '🎉', '🚀'];
      const randomEmoji = emojis[emojis.length * Math.random() | 0];

      figma.notify(`Updated ${selectionsLength} items ${randomEmoji}`);
    } else {
      figma.notify("Select at least one Frame or Group 👆");
    }
  }
};

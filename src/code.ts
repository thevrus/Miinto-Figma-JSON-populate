figma.showUI(__html__);

figma.ui.onmessage = async msg => {

  if (msg.status === 200 && msg.response) {

    const response = await JSON.parse(msg.response);
    let list = response.products.list;
    let images = msg.images;
    const selectionsLength = figma.currentPage.selection.length;

    function traverse(node, i) {
      if (node.type === 'GROUP') {
        for (const groupChild of node.children) traverse(groupChild, i);
      }
      else if (node.type === "TEXT" && node.name.indexOf("$") === 0) {
        replaceText(node, i);

      } else if (node.type === "RECTANGLE" && node.name.indexOf("$") === 0) {
        replaceImage(node, i)
      }
    }

    function closePlugin() {
      figma.closePlugin();
    }

    async function replaceText(node, i) {
      let nodeName = node.name.replace("$", "");
      await figma.loadFontAsync(node.fontName);
      node.characters = String(list[i][nodeName]);
    }

    function replaceImage(node, i) {
      let data = images[i] as Uint8Array;
      let imageHash = figma.createImage(new Uint8Array(data)).hash;

      node.fills = [
        { type: "IMAGE", scaleMode: "FILL", imageHash }
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

      closePlugin();
    } else {
      figma.ui.postMessage("Select frame or group");
    }
  }

  closePlugin();
};

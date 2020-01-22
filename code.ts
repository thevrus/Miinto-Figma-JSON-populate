figma.showUI(__html__);

figma.ui.onmessage = async msg => {
  if (msg.status === 200 && msg.response) {
    const response = JSON.parse(msg.response);

    if (figma.currentPage.selection.length > 0) {
      let i = 0;

      for (const node of figma.currentPage.selection) {
        for (const childNode of node.children) {
          if (childNode.type === "TEXT" && childNode.name.indexOf("$") === 0) {
            let nodeName = childNode.name.replace("$", "");

            await figma.loadFontAsync(childNode.fontName);
            childNode.characters = response[i][nodeName];
          } else if (childNode.type === "RECTANGLE") {
            msg.images.forEach(element => {
              let data = element as Uint8Array;
              let imageHash = figma.createImage(new Uint8Array(data)).hash;

              childNode.fills = [
                { type: "IMAGE", scaleMode: "FILL", imageHash }
              ];
            });
          }
        }

        i++;
      }

      figma.closePlugin();
    } else {
      figma.ui.postMessage("Select frame or group");
    }
  }

  figma.closePlugin();
};

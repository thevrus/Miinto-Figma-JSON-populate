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

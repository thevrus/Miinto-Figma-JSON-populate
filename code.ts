figma.showUI(__html__);

figma.ui.onmessage = msg => {
  console.log("msg", msg);

  if (msg.type === "fetch-names") {
    if (figma.currentPage.selection.length > 0) {
      const names: Array<String> = [];

      for (const node of figma.currentPage.selection) {

        for (const singleNode of node.children) {
          names.push(singleNode.name);
        }
      }

      console.log("names", names);

      figma.closePlugin();
    } else {
      console.log("Select frame or group");
    }
  }

  figma.closePlugin();
};

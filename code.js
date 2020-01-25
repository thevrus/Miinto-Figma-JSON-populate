var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg.status === 200 && msg.response) {
        const response = yield JSON.parse(msg.response);
        const products = response.products;
        const list = response.products.list;
        const images = msg.images;
        console.log(products);
        if (figma.currentPage.selection.length > 0) {
            let i = 0;
            for (const node of figma.currentPage.selection) {
                for (const childNode of node.children) {
                    if (childNode.type === "TEXT" && childNode.name.indexOf("$") === 0) {
                        let nodeName = childNode.name.replace("$", "");
                        yield figma.loadFontAsync(childNode.fontName);
                        childNode.characters = list[i][nodeName];
                    }
                    else if (childNode.type === "RECTANGLE") {
                        let data = images[i];
                        let imageHash = figma.createImage(new Uint8Array(data)).hash;
                        childNode.fills = [
                            { type: "IMAGE", scaleMode: "FILL", imageHash }
                        ];
                    }
                }
                i++;
            }
            figma.closePlugin();
        }
        else {
            figma.ui.postMessage("Select frame or group");
        }
    }
    figma.closePlugin();
});

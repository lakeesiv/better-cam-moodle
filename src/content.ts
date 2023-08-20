// get the value of removeSidebar from chrome.storage
interface Options {
  removeSidebar: boolean;
  removeEditMode: boolean;
  removeUselessLinks: boolean;
}

const injectCss = (filepath: string) => {
  const link = document.createElement("link");
  link.href = chrome.runtime.getURL(filepath);
  link.type = "text/css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const main = () => {
  if (!chrome.storage.sync) return;

  const options: Options = {
    removeSidebar: true,
    removeEditMode: true,
    removeUselessLinks: true,
  };

  chrome.storage.sync.get(options, (items) => {
    if (items.removeSidebar) {
      console.log("remove sidebar");
      injectCss("styles/optional/remove-sidebar.css");
    }
    if (items.removeEditMode) {
      console.log("remove edit mode");
      injectCss("styles/optional/remove-edit-mode.css");
    }
    if (items.removeUselessLinks) {
      console.log("remove useless links");
      injectCss("styles/optional/remove-useless-links.css");
    }
  });
};

main();

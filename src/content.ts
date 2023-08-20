// get the value of hideSidebar from chrome.storage

const injectCss = (filepath: string) => {
  const link = document.createElement("link");
  link.href = chrome.runtime.getURL(filepath);
  link.type = "text/css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const main = () => {
  if (!chrome.storage.sync) return;

  chrome.storage.sync.get({ hideSidebar: true }, (items) => {
    if (items.hideSidebar) {
      // inject the css to hide the sidebar
      injectCss("styles/remove-sidebar.css");
    }
  });
};

main();

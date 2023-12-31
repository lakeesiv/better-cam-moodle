/**
 * Injects a CSS file into the page.
 *
 * @param {string} filepath path to the CSS file
 */
const injectCss = (filepath: string) => {
  const link = document.createElement("link");
  link.href = chrome.runtime.getURL(filepath);
  link.type = "text/css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const main = () => {
  if (!chrome.storage.sync) return;

  const options = {
    removeSidebar: true,
    removeEditMode: true,
    removeUselessLinks: true,
    removeDashboardRigthtBlock: true,
    cleanupRightBlock: true,
  };

  // Inject CSS files
  chrome.storage.sync.get(options, (items) => {
    if (items.removeSidebar) {
      injectCss("styles/optional/remove-sidebar.css");
    }
    if (items.removeEditMode) {
      injectCss("styles/optional/remove-edit-mode.css");
    }
    if (items.removeUselessLinks) {
      injectCss("styles/optional/remove-useless-links.css");
    }
    if (items.removeDashboardRigthtBlock) {
      injectCss("styles/optional/remove-dashboard-right-block.css");
    }
    if (items.cleanupRightBlock) {
      injectCss("styles/optional/cleanup-right-block.css");
    }
  });
};

main();

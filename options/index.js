const saveOptions = () => {
  const hideSidebar = document.getElementById("hide-sidebar")?.checked;

  chrome.storage.sync.set({ hideSidebar: hideSidebar }, () => {
    console.log("hideSidebar is set to " + hideSidebar);
    const status = document.getElementById("status");
    status.textContent = "Options saved.";
    setTimeout(() => {
      status.textContent = "";
    }, 750);
  });
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get({ hideSidebar: true }, (items) => {
    document.getElementById("hide-sidebar").checked = items.hideSidebar;
  });
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
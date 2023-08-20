const saveOptions = () => {
  const inputEl = document.getElementById("hide-sidebar") as HTMLInputElement;
  const hideSidebar = inputEl?.checked;

  chrome.storage.sync.set({ hideSidebar: hideSidebar }, () => {
    console.log("hideSidebar is set to " + hideSidebar);
    const status = document.getElementById("status") as HTMLDivElement;
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
    const hideSideBarEl = document.getElementById(
      "hide-sidebar"
    ) as HTMLInputElement;
    hideSideBarEl.checked = items.hideSidebar;
  });
};

document.addEventListener("DOMContentLoaded", restoreOptions);
const saveButton = document.getElementById("save") as HTMLButtonElement;
saveButton.addEventListener("click", saveOptions);

const getOptionValue = (option: string) => {
  const inputEl = document.getElementById(option) as HTMLInputElement;
  return inputEl.checked;
};

const saveOptions = () => {
  const removeSidebar = getOptionValue("remove-sidebar");

  chrome.storage.sync.set({ removeSidebar: removeSidebar }, () => {
    console.log("removeSidebar is set to " + removeSidebar);
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
  chrome.storage.sync.get({ removeSidebar: true }, (items) => {
    const removeSidebarEl = document.getElementById(
      "remove-sidebar"
    ) as HTMLInputElement;
    removeSidebarEl.checked = items.removeSidebar;
  });
};

document.addEventListener("DOMContentLoaded", restoreOptions);
const saveButton = document.getElementById("save") as HTMLButtonElement;
saveButton.addEventListener("click", saveOptions);

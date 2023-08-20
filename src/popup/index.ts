interface Options {
  removeSidebar: boolean;
  removeEditMode: boolean;
  removeUselessLinks: boolean;
}

const getOptionValue = (option: string) => {
  const inputEl = document.getElementById(option) as HTMLInputElement;
  return inputEl?.checked;
};

const setOptionValue = (
  option: string,
  value: boolean | null,
  defaultValue: boolean = true
) => {
  const inputEl = document.getElementById(option) as HTMLInputElement;
  if (value === null) {
    value = defaultValue;
  }
  inputEl.checked = value;
};

const saveOptions = () => {
  const options: Options = {
    removeSidebar: getOptionValue("remove-sidebar"),
    removeEditMode: getOptionValue("remove-edit-mode"),
    removeUselessLinks: getOptionValue("remove-useless-links"),
  };

  chrome.storage.sync.set(options, () => {
    const status = document.getElementById("status") as HTMLElement;
    status.textContent = "Options saved.";
    setTimeout(() => {
      status.textContent = "";
    }, 750);
  });
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  const options: Options = {
    removeSidebar: true,
    removeEditMode: true,
    removeUselessLinks: true,
  };

  chrome.storage.sync.get(options, (items) => {
    setOptionValue("remove-sidebar", items.removeSidebar);
    setOptionValue("remove-edit-mode", items.removeEditMode);
    setOptionValue("remove-useless-links", items.removeUselessLinks, false);
  });
};

document.addEventListener("DOMContentLoaded", restoreOptions);
const saveButton = document.getElementById("save") as HTMLButtonElement;
saveButton.addEventListener("click", saveOptions);

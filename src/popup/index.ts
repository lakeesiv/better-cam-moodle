interface Options {
  removeSidebar: boolean;
  removeEditMode: boolean;
  removeUselessLinks: boolean;
  removeDashboardRigthtBlock: boolean;
  autoLogin: boolean;
}

/**
 * Get the value of an option from the popup page
 *
 * @param {string} option id of the option element
 * @return {boolean} value of the option
 */
const getOptionValue = (option: string) => {
  const inputEl = document.getElementById(option) as HTMLInputElement;
  return inputEl?.checked;
};

/**
 * Set the value of an option from the popup page
 *
 * @param {string} option id of the option element
 * @param {(boolean | null)} value value of the option
 * @param {boolean} [defaultValue=true] default value of the option
 */
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

/**
 * Save options to chrome.storage
 */
const saveOptions = () => {
  const options: Options = {
    removeSidebar: getOptionValue("remove-sidebar"),
    removeEditMode: getOptionValue("remove-edit-mode"),
    removeUselessLinks: getOptionValue("remove-useless-links"),
    removeDashboardRigthtBlock: getOptionValue("remove-dashboard-right-block"),
    autoLogin: getOptionValue("auto-login"),
  };

  chrome.storage.sync.set(options, () => {
    const status = document.getElementById("status") as HTMLElement;
    status.textContent = "Options saved.";
    setTimeout(() => {
      status.textContent = "";
    }, 750);
  });
};

/**
 * Restore options from chrome.storage
 */
const restoreOptions = () => {
  const options: Options = {
    removeSidebar: true,
    removeEditMode: true,
    removeUselessLinks: true,
    removeDashboardRigthtBlock: true,
    autoLogin: true,
  };

  chrome.storage.sync.get(options, (items) => {
    setOptionValue("remove-sidebar", items.removeSidebar);
    setOptionValue("remove-edit-mode", items.removeEditMode);
    setOptionValue("remove-useless-links", items.removeUselessLinks);
    setOptionValue(
      "remove-dashboard-right-block",
      items.removeDashboardRigthtBlock
    );
    setOptionValue("auto-login", items.autoLogin);
  });
};

document.addEventListener("DOMContentLoaded", restoreOptions);
const saveButton = document.getElementById("save") as HTMLButtonElement;
saveButton.addEventListener("click", saveOptions);

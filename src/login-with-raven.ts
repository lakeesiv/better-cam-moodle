const login = () => {
  const logOnEl = document.querySelectorAll("a.btn.btn-secondary")?.[0] as
    | HTMLAnchorElement
    | undefined;
  if (logOnEl) {
    logOnEl.click();
  }
};

const options = {
  autoLogin: true,
};

chrome.storage.sync.get(options, (items) => {
  if (items.autoLogin) {
    login();
  }
});

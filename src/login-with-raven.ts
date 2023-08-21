const logOn = document.querySelectorAll("a.btn.btn-secondary")?.[0] as
  | HTMLAnchorElement
  | undefined;

if (logOn) {
  logOn.click();
}

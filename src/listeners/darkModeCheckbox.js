var checkbox = document.querySelector("#darkmodecheckbox");
if (localStorage.getItem("darkMode") === "true") {
  checkbox.checked = true;
  document.querySelector("html").classList.remove("light");
  document.querySelector("html").classList.add("dark");
} else {
  checkbox.checked = false;
  document.querySelector("html").classList.add("light");
  document.querySelector("html").classList.remove("dark");
}

checkbox.addEventListener("input", (e) => {
  if (checkbox.checked === true) {
    localStorage.setItem("darkMode", "true");
    document.querySelector("html").classList.remove("light");
    document.querySelector("html").classList.add("dark");
  } else {
    localStorage.setItem("darkMode", "false");
    document.querySelector("html").classList.add("light");
    document.querySelector("html").classList.remove("dark");
  }
});

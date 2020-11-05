var checkbox = document.querySelector("#darkmodecheckbox");
if (localStorage.getItem("darkMode") && localStorage.getItem("darkMode") == "true") {
  checkbox.checked = true;
  document.querySelector("html").classList.remove("light");
  document.querySelector("html").classList.add("dark");
}

checkbox.addEventListener("input", (e) => {
  console.log("run");
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
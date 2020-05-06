const searchInput = document.querySelector("#nav-search-input");

searchInput.addEventListener("focus", function () {
    this.parentNode.parentNode.classList.add("expanded");
});
searchInput.addEventListener("blur", function () {
    this.parentNode.parentNode.classList.remove("expanded");
});
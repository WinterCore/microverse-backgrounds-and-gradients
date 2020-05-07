const searchInput = document.querySelector('#nav-search-input');

searchInput.addEventListener('focus', function handleSearchInputFocus() {
  this.parentNode.parentNode.classList.add('expanded');
});
searchInput.addEventListener('blur', function handleSearchInputBlur() {
  this.parentNode.parentNode.classList.remove('expanded');
});
const searchInput = document.getElementById("searchInput");
const listItems = document.querySelectorAll("#skillList li");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  listItems.forEach(item => {
    const itemText = item.textContent.toLowerCase();

    if (itemText.includes(searchText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

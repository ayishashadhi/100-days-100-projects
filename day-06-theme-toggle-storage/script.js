const toggleBtn = document.getElementById("toggleBtn");

// 1️⃣ Check saved theme when page loads
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// 2️⃣ Toggle theme on button click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // 3️⃣ Save theme
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

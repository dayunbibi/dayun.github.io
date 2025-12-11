const dailyRecipes = [
  { name: "Creamy Carbonara", img: "../images/2carbonara.jpg", link: "browse.html" },
  { name: "Japanese Sushi", img: "../images/3sushi.jpg", link: "browse.html" },
  { name: "Classic Hot chocolate", img: "../images/hotcocoa1.jpg", link: "browse.html" },
  { name: "Greek Spanakopita", img: "../images/2spanakopita.jpg", link: "browse.html" },
  { name: "Holiday Turkey", img: "../images/turkey1.jpg", link: "browse.html" }
];

let randomRecipe = dailyRecipes[Math.floor(Math.random() * dailyRecipes.length)];

document.getElementById("rodImage").src = randomRecipe.img;
document.getElementById("rodName").textContent = randomRecipe.name;
document.getElementById("rodLink").href = randomRecipe.link;
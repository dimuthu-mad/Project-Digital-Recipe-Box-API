import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

const recipes = [
  { id: 1, name: "Classic Pancakes", cuisine: "American", prepTime: "15 mins" },
  { id: 2, name: "Spaghetti Calbora", cuisine: "Italian", prepTime: "20 mins" },
  { id: 3, name: "Guacamelo", cuisine: "Mexican", prepTime: "25 mins" },
];

app.get("/recipes", (req, res) => {
  res.json(recipes);
});

app.get("/recipes/:id", (req, res) => {
  const receipID = parseInt(req.params.id);
  const selectRecipe = recipes.find((element) => element.id === receipID);
  if (!selectRecipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }
  res.json(selectRecipe);
});

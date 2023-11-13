// Importo librerie
const express = require("express");
const dotenv = require("dotenv");

const homeController = require("./controllers/home");

// Importo i posts.js
const postsController = require("./controllers/posts");

dotenv.config();

// Uso variabile per la porta
let port = +process.env.PORT || 3001;

// Definisco istanza di express.js
const app = express();

// Configuro asset statico
app.use(express.static("public"));

// Rotta della home
app.get("/", homeController.postIndex);

// Definisco la rotta dei posts
app.get("/posts", postsController.index);

// Avvio il server
app.listen(port, () => {
  console.log(`Server is running on http:/localhost:${port}`);
});

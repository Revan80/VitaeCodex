const express = require('express');
const app = express();
const path = require('path');

// Config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Route principale
app.get('/', (req, res) => {
  res.render('index', { title: "VitaeCodex" });
});

// Lancement serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌍 Server running on http://localhost:${PORT}`);
});

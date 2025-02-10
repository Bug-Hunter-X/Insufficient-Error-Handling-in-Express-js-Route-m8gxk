const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Improper error handling: sends 500 for all errors
      return res.status(500).send('Internal Server Error');
    }
    res.json(user);
  });
});
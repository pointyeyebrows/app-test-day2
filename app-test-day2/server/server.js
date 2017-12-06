require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      cors = require('cors'),
      axios = require('axios');
      ctr = require('./controllers');

      const app =express();
      massive(process.env.CONNECTION_STRING).then(db => {
          app.set("db", db);
      })
      app.use(bodyParser.json());
      app.use(session({
          secret: process.env.SECRET,
          resave: false,
          saveUninitialized: true
      }))
      
      app.post('/addAnimal',ctr.addToAnimals);
      app.put('/editAnimal/:id', ctr.editAnimal);


      const PORT = 3030;
      app.listen(PORT, () => console.log(`Listening on port ${PORT} `));
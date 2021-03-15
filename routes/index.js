const cool = require('cool-ascii-faces') ;
const express = require('express');
const router = express.Router();
const path = require('path') ;
const PORT = process.env.PORT || 3000
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://aswathy:123@cluster0.nxywd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = router;


router.get('/mongodb', function (request, response) {

  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    //get collection of routes
    const db = client.db('Test');
    const Routes = db.collection('Test');
    //get all Routes
    Routes.find({ }).toArray(function (err, docs) {
      if(err) throw err;

      response.render('pages/mongodb', {results: docs});

    });

    //close connection when your app is terminating.
    client.close(function (err) {
      if(err) throw err;
    });
  });//end of connect

});//end router.get
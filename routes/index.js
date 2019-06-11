var express = require('express');
var router = express.Router();
var countAccueil = 0;
var countPage2 = 0;
var countPage3 = 0;
var countPage4 = 0;
var countPage5 = 0;

router.get('/', function(req, res, next) {
  countAccueil ++;
  console.log("Page Accueil : " + countAccueil);
  res.render('accueil');
});
router.get('/accueil', function(req, res, next) {
  countAccueil ++;
  console.log("Page Accueil : " + countAccueil);
  res.render('accueil');
});

router.get('/page2', function(req, res, next) {
  countPage2 ++;
  console.log("Page 2 : " + countPage2);
  res.render('page2');
});

router.get('/page3', function(req, res, next) {
  countPage3 ++;
  console.log("Page 3 : " + countPage3);
  res.render('page3');
});

router.get('/page4', function(req, res, next) {
  countPage4 ++;
  console.log("Page 4 : " + countPage4);
  res.render('page4');
});

router.get('/page5', function(req, res, next) {
  countPage5 ++;
  console.log(" Page 5 : " + countPage5);
  res.render('page5');
});

router.get('/compteur', function(req, res, next) {
  res.render('compteur', { countAccueil: countAccueil, countPage2: countPage2, countPage3: countPage3, countPage4: countPage4, countPage5: countPage5 });
});

module.exports = router;

// Middleware


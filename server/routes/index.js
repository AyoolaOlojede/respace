var express = require('express');
var router = express.Router();
var { getCharacter }=require('../controllers/swapi.api');



router.get('/:id', getCharacter);
module.exports = router;
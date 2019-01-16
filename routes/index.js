var express = require('express');
var router = express.Router();


const controller = require('../controllers/valueController');

/**
 *  Routes
 */
 
router.get('/',  controller.helloWorld);
router.get('/hello',  controller.helloWorld);

router.get('/value',  controller.value);
router.post('/increment',  controller.increment);

module.exports = router;



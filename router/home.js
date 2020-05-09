let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    res.send('Bievenidos al home');
})

module.exports = router;
const router = require('express').Router();
const randomToken = require('../helpers/randomToken');

router.post('/', (req, res) => {
    res.status(200).json({
        token: randomToken(15),
    });
});

module.exports = router;

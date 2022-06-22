const router = require('express').Router();
const randomToken = require('../helpers/randomToken');
const {
    isValidEmail,
    isValidPassword,
  } = require('../middlewares/validationLogin');

router.post('/', isValidEmail, isValidPassword, (req, res) => {
    res.status(200).json({
        token: randomToken(16),
    });
});

module.exports = router;

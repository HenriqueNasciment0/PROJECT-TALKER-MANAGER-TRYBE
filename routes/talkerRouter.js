const router = require('express').Router();
const { readContentFile } = require('../helpers/readFile');

const path = './talker.json';

router.get('/', async (req, res) => {
    const talkers = await readContentFile(path) || [];
    res.status(200).json(talkers);
});

module.exports = router;
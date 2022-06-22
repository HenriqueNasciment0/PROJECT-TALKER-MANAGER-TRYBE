const router = require('express').Router();
const { readContentFile } = require('../helpers/readFile');
const { writeContentFile } = require('../helpers/writeFile');
const { isNameValid,
    isAgeValid,
    isTalkValid,
    isRateValid,
    isWatchedAtValid,
    isValidToken } = require('../middlewares/validationTalker');

const path = './talker.json';

router.get('/', async (req, res) => {
    const talkers = await readContentFile(path) || [];
    res.status(200).json(talkers);
});

router.get('/:id', async (req, res, next) => {
    const talkers = await readContentFile(path) || [];
    const { id } = req.params;
    const talker = talkers.find((e) => e.id === Number(id));

    if (!talker) {
        return next(res.status(404).json({
            message: 'Pessoa palestrante não encontrada',
          }));
    }
    return res.status(200).json(talker);
});

router.post('/',
    isValidToken,
    isNameValid,
    isAgeValid,
    isTalkValid,
    isWatchedAtValid,
    isRateValid,
     async (req, res) => {
        const newTalker = req.body;
        const talkers = await writeContentFile(path, newTalker);
        return res.status(201).send(talkers);
    });

module.exports = router;

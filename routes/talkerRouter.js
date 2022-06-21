const router = require('express').Router();
const { readContentFile } = require('../helpers/readFile');
const validationToken = require('../middlewares/validationToken');

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

router.post('/', validationToken, (req, res) => {
    res.status(200).json({
        name: 'Danielle Santos',
        age: 56,
        talk: {
          watchedAt: '22/10/2019',
          rate: 5,
        },
      });
});

module.exports = router;

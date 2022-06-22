const isValidToken = (req, res, next) => {
    const token = req.headers.authorization;
    const tokenRegex = new RegExp(/^[a-zA-Z0-9]{16}$/); // regex não é necessário

    if (!token) {
        return res.status(401).json({ message: 'Token não encontrado' });
    }
  
    if (!tokenRegex.test(token)) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  
    next();
  };

const isNameValid = (req, res, next) => {
    const { name } = req.body;
  
    if (!name) {
       return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    const lengthName = name.length >= 3;
    if (!lengthName) {
      return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
  
    next();
  };
  
const isAgeValid = (req, res, next) => {
    const { age } = req.body;
  
    if (!age) {
      return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }

    const minimumAge = 18;
    if (age < minimumAge) {
        return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }

    next();
  };
  
const isTalkValid = (req, res, next) => { 
    const { talk } = req.body;
  
    if (!talk) {
      return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    }
  
    next();
  };

const isWatchedAtValid = (req, res, next) => {
    const { talk: { watchedAt } } = req.body;
    const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    if (!watchedAt) {
       return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }

    if (!dateRegex.test(watchedAt)) {
       return res.status(400).json(
        { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
);
    }

    next();
  };

const isRateValid = (req, res, next) => {
    const { talk: { rate } } = req.body;
    
    if (!rate) {
       return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }

    if (!(rate >= 1 && rate <= 5)) {
       return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }

    next();
  };
  
module.exports = {
    isNameValid,
    isAgeValid,
    isTalkValid,
    isWatchedAtValid,
    isRateValid,
    isValidToken,
  };

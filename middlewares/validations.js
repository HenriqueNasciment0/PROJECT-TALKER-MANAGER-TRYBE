const isValidEmail = (req, res, next) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }

    if (!email.includes('@')
        || !email.includes('.com')
    ) {
        res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }

    next();
};

const isValidPassword = (req, res, next) => {
    const { password } = req.body;

    if (!password) {
        res.status(400).json({ message: 'O campo "password" é obrigatório' });  
    }

    const lengthPassword = password.length >= 6;
    if (!lengthPassword) {
        return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }

    next();
};

module.exports = {
    isValidEmail,
    isValidPassword,
};

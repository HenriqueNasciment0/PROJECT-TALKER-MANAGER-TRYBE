const randomToken = (num) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1 = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i += 1) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
};

module.exports = randomToken;

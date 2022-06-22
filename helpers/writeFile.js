const fs = require('fs').promises;

const writeContentFile = async (path, newTalker) => {
  try {
    const arrTalkers = await fs.readFile(path, 'utf-8');
    const forJson = JSON.parse(arrTalkers);
    const { name, age, talk } = newTalker;
    forJson.push({ name, age, id: forJson.length + 1, talk });
    
    await fs.writeFile(path, JSON.stringify(forJson));

    return { name, age, id: forJson.length, talk };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

module.exports = {
  writeContentFile,
};
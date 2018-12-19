require('dotenv').config();
const Pokemon = require('./pokemon');

async function start() {
  try {
    const pkmn = await Pokemon.getWithTypes();
    console.log(pkmn);
    
  } catch(e) {
    console.log(e);
  }
}

start()
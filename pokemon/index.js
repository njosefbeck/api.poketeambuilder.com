const db = require('../db');
const Type = require('../Type');

class Pokemon {
  constructor(dbObject) {
    this.id = dbObject.id;
    this.identifier = dbObject.identifier;
    this.pokemonName = dbObject.pokemon_name;

    if (dbObject.types) {
      this.types = dbObject.types;
    }
  }

  static async getAll() {
    try {
      const results = await db.query('SELECT * FROM pokemon');
      return results.map(result => new Pokemon(result));
    } catch(e) {
      throw e;
    }
  }

  static async getAllWithTypes() {
    try {
      const query = `
      SELECT
        pkmn.id AS id,
        pkmn.identifier AS identifier,
        pkmn.pokemon_name,
        types.id AS type_id,
        types.identifier AS type_identifier
      FROM pokemon_types AS pt
      JOIN pokemon AS pkmn
        ON pt.pokemon_id = pkmn.id
      JOIN types
        ON pt.type_id = types.id;
      `;

      const results = await db.query(query);
      return Pokemon.combinePokemonTypeRecords(results);

    } catch(e) {
      throw e;
    }
  }

  static combinePokemonTypeRecords(dbResults) {
    // Need to combine results together
    // since we have duplicate pokemon records
    // (due to multiple types per pokemon)
    const pkmn = {};
    for (const result of dbResults) {
      if (!pkmn[result.id]) {

        // Convert the type record into an object
        // and add it to a new key called types
        const types = [new Type(result.type_id, result.type_identifier)];
        const resultWithType = Object.assign(result, { types });

        // Cache the pokemon in the
        // pkmn object if it doesn't already exist
        pkmn[result.id] = resultWithType;
        continue;
      }

      // Result already exists in the pkmn cache
      // So now we just have to add the additional type
      // to the cached version
      const record = Object.assign({}, pkmn[result.id]);
      record.types.push(new Type(result.type_id, result.type_identifier));
      pkmn[result.id] = record;
    };

    const pkmnArray = Object.values(pkmn)
      .map(pk => new Pokemon(pk));

    return pkmnArray;
  }
};

module.exports = Pokemon;
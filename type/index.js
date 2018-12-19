class Type {
  constructor(id, identifier) {
    this.id = id;
    this.identifier = identifier;
  }

  static async getAll() {
    try {
      const results = await db.query('SELECT * FROM types');
      return results.map(result => new Type(result));
    } catch(e) {
      throw e;
    }
  }
};

module.exports = Type;
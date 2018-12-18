FORMAT: 1A

# api.poketeambuilder.com

The poketeambuilder API allows poketeambuilder.com to function and allows consumers to get the teams they've created. Follows the [API Blueprint](https://apiblueprint.org/) style for API documentation.

# Group Pokemon

Resources related to pokemon.

## Pokemon Collection [/pokemon]

### List All Pokemon [GET]

List all pokemon. 

+ Response 200 (application/json)

        {
          pokemon: [
            {
              id: 1,
              identifier: 'bulbasaur',
              pokemon_name: 'Bulbasaur'
            },
            {
              id: 2,
              identifier: 'ivysaur',
              pokemon_name: 'Ivysaur'
            },
          ]
        }

# Group Types

Resources related to types.

# Group Type Efficacies

Resources related to [type efficacies](https://bulbapedia.bulbagarden.net/wiki/Type#Type_effectiveness).

# Group Generations

Resources related to generations.


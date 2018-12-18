FORMAT: 1A

# api.poketeambuilder.com

The poketeambuilder API allows poketeambuilder.com to function and allows consumers to get the teams they've created. Follows the [API Blueprint](https://apiblueprint.org/) style for API documentation.

# Group Pokemon

Resources related to pokemon.

## Pokemon All [/pokemon{?types}]

A resource representing all pokemon in the system.

+ Parameters

    + types (boolean, optional) - Specify true to include pokemon type information in response.
        + Default: `false`

### List All Pokemon [GET]

List all pokemon. 

+ Response 200 (application/json)
    
    + Body

            {
              pokemon: [
                {
                  "id": 1,
                  "identifier": "bulbasaur",
                  "pokemonName": "Bulbasaur"
                },
                {
                  "id": 2,
                  "identifier": "ivysaur",
                  "pokemonName": "Ivysaur"
                },
              ]
            }

+ Response 200 (application/json)
    
    + Body

            {
              pokemon: [
                {
                  "id": 1,
                  "identifier": "bulbasaur",
                  "pokemonName": "Bulbasaur",
                  "types": [
                    {
                      "id": 12,
                      "identifier": "grass"
                    },
                    {
                      "id": 4,
                      "identifier": "poison"
                    }
                  ]
                },
                {
                  "id": 2,
                  "identifier": "ivysaur",
                  "pokemonName": "Ivysaur",
                  "types": [
                    {
                      "id": 12,
                      "identifier": "grass"
                    },
                    {
                      "id": 4,
                      "identifier": "poison"
                    }
                  ]
                },
              ]
            }

## Pokemon Individual [/pokemon/{id}{?types}]

A resource representing an individual pokemon.

+ Parameters

    + id: 1 (number, required) - A unique identifier of the pokemon.
    + types (boolean, optional) - Specify true to include pokemon type information in response.
        + Default: `false`

### List individual Pokemon [GET]

List individual pokemon.

+ Response 200 (application/json)

    + Body

            {
              "pokemon": {
                "id": 1,
                "identifier": "bulbasaur",
                "pokemonName": "Bulbasaur"
              }
            }

+ Response 200 (application/json)

    + Body

            {
              "pokemon": {
                "id": 1,
                "identifier": "bulbasaur",
                "pokemonName": "Bulbasaur",
                "types": [
                  {
                    "id": 12,
                    "identifier": "grass"
                  },
                  {
                    "id": 4,
                    "identifier": "poison"
                  }
                ]
              }
            }


# Group Types

Resources related to types.

# Group Type Efficacies

Resources related to [type efficacies](https://bulbapedia.bulbagarden.net/wiki/Type#Type_effectiveness).

# Group Generations

Resources related to generations.


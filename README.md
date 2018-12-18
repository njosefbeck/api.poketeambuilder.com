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

    + Attributes
        + pokemon: array[Pokemon]

+ Response 200 (application/json)

    + Attributes
        + pokemon: array[PokemonWithTypes]

## Pokemon Individual [/pokemon/{id}{?types}]

A resource representing an individual pokemon.

+ Parameters

    + id: 1 (number, required) - A unique identifier of the pokemon.
    + types (boolean, optional) - Specify true to include pokemon type information in response.
        + Default: `false`

### List individual Pokemon [GET]

List individual pokemon.

+ Response 200 (application/json)

    + Attributes (Pokemon)

+ Response 200 (application/json)

    + Attributes (PokemonWithTypes)

# Group Types

Resources related to types.

## Types All [/types]

A resource representing all types in the system.

### List All Types [GET]

List all types.

## Types Individual [/types/{id}]

# Group Type Efficacies

Resources related to [type efficacies](https://bulbapedia.bulbagarden.net/wiki/Type#Type_effectiveness).

# Group Generations

Resources related to generations.

# Data Structures

## Pokemon (object)
+ id: 1 (number, required)
+ identifier: bulbasaur (string)

    A string with two parts separated by a `:`. Both parts are all lower-case, and words are joined together by `-`. The first part is the Pokemon's English name, and the second part is its form (ex: `venusaur:mega`). If no form present, then only the English name is returned.

+ pokemonName: Bulbasaur (string)

## PokemonWithTypes (object)
+ Include Pokemon
+ types: [{ "id": 12, "identifier": "grass"}] (array[Type])

## Type (object)
+ id: 12 (number, required)
+ identifier: grass (string)

    A string with the type in all lowercase.


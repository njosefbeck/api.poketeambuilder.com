SELECT
	pkmn.identifier AS pokemon_identifier,
	pkmn.pokemon_name,
	types.identifier AS type
FROM pokemon_types AS pt
JOIN pokemon AS pkmn
	ON pt.pokemon_id = pkmn.id
JOIN types
	ON pt.type_id = types.id;
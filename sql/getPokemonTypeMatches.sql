SELECT
	pkmn.identifier AS pokemon_identifier,
	pkmn.pokemon_name,
	types.identifier AS atk_type,
	typs2.identifier AS def_type,
	tmm.dmg_modifier,
	tmm.generation_id
FROM pokemon_types AS pt

-- Get pokemon name and identifier
JOIN pokemon AS pkmn
	ON pt.pokemon_id = pkmn.id

-- Get pokemon type(s) information, to use for atk_type
JOIN types
	ON pt.type_id = types.id
	
-- Get type match ids for pokemon type(s)
JOIN type_matches AS tm
	ON types.id = tm.atk_type_id

-- Get type match damage modifiers for pokemon type(s)
JOIN type_match_modifiers AS tmm
	ON tm.id = tmm.type_match_id

-- Turn def_type_id into a type name
JOIN types AS typs2
	ON tm.def_type_id = typs2.id
	
-- Limit results to a specific pokemon and generation
WHERE 
	pkmn.identifier = 'bulbasaur' AND tmm.generation_id = 7;
SELECT
	tmm.id AS type_match_modifier_id,
	tmm.type_match_id AS type_match_id,
	tmm.generation_id,
	tm.atk_type_id,
	tm.def_type_id,
	tmm.dmg_modifier
FROM type_match_modifiers AS tmm
JOIN type_matches AS tm
	ON tmm.type_match_id = tm.id
WHERE
	tm.atk_type_id IN (12, 4) AND
	tmm.generation_id = 7;

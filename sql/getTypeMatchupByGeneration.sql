SELECT
	tmm.id,
	t1.identifier AS atk_type,
	t2.identifier AS def_type,
	tmm.dmg_modifier,
	tmm.generation_id
FROM type_match_modifiers AS tmm
JOIN type_matches AS tm
	ON tmm.type_match_id = tm.id
JOIN types AS t1
	ON tm.atk_type_id = t1.id
JOIN types AS t2
	ON tm.def_type_id = t2.id
WHERE
	tmm.generation_id = 1;

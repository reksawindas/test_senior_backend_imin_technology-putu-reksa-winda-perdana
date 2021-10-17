CREATE TABLE public.tb_ingredient (
	id serial NOT NULL,
	ingredient_name varchar(150) NULL,
	ingredient_state int8 NULL,
	measurement_unit int8 NULL,
	ingredient_type int8 NULL,
	CONSTRAINT tb_ingredient_pk PRIMARY KEY (id)
);
CREATE INDEX tb_ingredient_id_idx ON public.tb_ingredient USING btree (id);

INSERT INTO tb_ingredient (ingredient_name, ingredient_state, measurement_unit, ingredient_type) VALUES('Potato', 1, 2, 1);

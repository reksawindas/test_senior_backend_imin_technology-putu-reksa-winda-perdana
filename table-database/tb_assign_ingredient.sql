CREATE TABLE public.tb_assign_ingredient (
	id serial NOT NULL,
	name_assign varchar(150) NULL,
	CONSTRAINT tb_assign_ingredients_pk PRIMARY KEY (id)
);
CREATE INDEX tb_assign_ingredients_id_idx ON public.tb_assign_ingredient USING btree (id);

INSERT INTO tb_assign_ingredient (name_assign) VALUES('Egg');

INSERT INTO tb_assign_ingredient (name_assign) VALUES('Beef');

INSERT INTO tb_assign_ingredient (name_assign) VALUES('Tomato');
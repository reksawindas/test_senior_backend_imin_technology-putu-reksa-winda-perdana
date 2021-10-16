CREATE TABLE public.tb_ingredient_type (
	id serial NOT NULL,
	type_name varchar(150) NULL,
	assign_ingredient int8 NULL,
	CONSTRAINT tb_ingredient_type_pk PRIMARY KEY (id)
);
CREATE INDEX tb_ingredient_type_id_idx ON public.tb_ingredient_type USING btree (id);

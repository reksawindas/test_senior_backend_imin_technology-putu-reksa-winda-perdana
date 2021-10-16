CREATE TABLE public.tb_assign_ingredient (
	id int8 NOT NULL,
	name_assign varchar(150) NULL,
	CONSTRAINT tb_assign_ingredient_pk PRIMARY KEY (id)
);
CREATE INDEX tb_assign_ingredient_id_idx ON public.tb_assign_ingredient USING btree (id);

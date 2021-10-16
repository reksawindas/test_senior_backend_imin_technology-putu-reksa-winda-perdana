CREATE TABLE public.tb_ingredient_state (
	id serial NOT NULL,
	state_name varchar(150) NULL,
	assign_ingredient int8 NULL,
	CONSTRAINT tb_ingredient_state_pk PRIMARY KEY (id)
);
CREATE INDEX tb_ingredient_state_id_idx ON public.tb_ingredient_state USING btree (id);

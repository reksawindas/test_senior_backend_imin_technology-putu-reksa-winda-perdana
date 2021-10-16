CREATE TABLE public.tb_inflow (
	id serial NOT NULL,
	id_ingredient int8 NULL,
	id_reason int8 NULL,
	price int8 NULL,
	quantity int8 NULL,
	additional_details varchar(200) NULL,
	created_date date NULL,
	CONSTRAINT tb_inflow_pk PRIMARY KEY (id)
);
CREATE INDEX tb_inflow_id_idx ON public.tb_inflow USING btree (id);

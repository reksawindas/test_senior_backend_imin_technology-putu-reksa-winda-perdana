CREATE TABLE public.tb_measurements (
	id serial NOT NULL,
	unit_name varchar(150) NULL,
	abbreviation varchar(150) NULL,
	precion int8 NULL,
	CONSTRAINT tb_measurements_pk PRIMARY KEY (id)
);
CREATE INDEX tb_measurements_id_idx ON public.tb_measurements USING btree (id);

CREATE TABLE public.tb_reason (
	id int8 NOT NULL,
	name_reason varchar(100) NULL,
	CONSTRAINT tb_reason_pk PRIMARY KEY (id)
);
CREATE INDEX tb_reason_id_idx ON public.tb_reason USING btree (id);

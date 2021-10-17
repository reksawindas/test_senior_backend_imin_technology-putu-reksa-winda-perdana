CREATE TABLE public.tb_reason (
	id serial NOT NULL,
	name_reason varchar(100) NULL,
	CONSTRAINT tb_reasons_pk PRIMARY KEY (id)
);
CREATE INDEX tb_reasons_id_idx ON public.tb_reason USING btree (id);


INSERT INTO tb_reason (name_reason) VALUES('Purchase');

INSERT INTO tb_reason (name_reason) VALUES('Recount');
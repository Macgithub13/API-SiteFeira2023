#Comandos Gerais

select ID_SALA, DS_SALAS,DS_APRESENTACAO, DS_ANDAR,NR_PESSOAS,VL_AVALIACAO
		from tb_salas;

select * from TB_salas;

insert into TB_salas (DS_salas, DS_apresentacao, DS_andar, NR_pessoas,nr_avaliacao)
        values
	('Sala 4', 'Ótica Brauzo', 'Pátio', 0,0),
	('Sala 5', 'Apresentação de Cursos', 'Pátio', 0,0),
	('Sala 6', 'Bate papo sobre as Escolhas de Profissões', 'Pátio', 0,0),
    
	('Sala 17', 'Poato de Saúde', '1º', 0,0),
	('Sala 18', 'ADM - RH e POC', '1º', 0,0),
	('Sala 19', 'ADM - Empreendedorismo e Logística', '1º', 0,0),
    
	('Sala 24', 'Comunicação Visual', '2º', 0,0.0),
	('Sala 25', 'Informática - Montagem, Configuração e Redes', '2º', 0,0),
	('Sala 26', 'Informática - Programação', '2º', 0,0),
    
	('AUDITORIO', 'CATE e Simulação de Entrevista', '3º', 0,0),
	('AUDITORIO', 'SAS', '3º', 0,0),
	('Sala 33', 'LINKEDIM', '3º', 0,0);


#Comandos para HomePage-Adm

#(Maior)
select ID_SALA, DS_APRESENTACAO, DS_ANDAR,NR_PESSOAS,VL_AVALIACAO
		from tb_salas
        ORDER BY NR_PESSOAS desc;

#(Menor)
select ID_SALA, DS_APRESENTACAO, DS_ANDAR,NR_PESSOAS,VL_AVALIACAO
		from tb_salas
        ORDER BY NR_PESSOAS;

        


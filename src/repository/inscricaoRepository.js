import conexao from './connections.js';

export async function inserir(inscricao) {
    let comando = 'insert into tb_inscricao(nm_nome, nm_ser_chamado, ds_email, nr_telefone, nm_bairro, ds_prev_chegada, ds_sabendo, ds_foialuno,bt_visitou) values(?,?,?,?,?,?,?,?,false)';

    let [resposta] = await conexao.query(comando, [
        inscricao.nm_nome,
        inscricao.nm_ser_chamado,
        inscricao.ds_email,
        inscricao.nr_telefone,
        inscricao.nm_bairro,
        inscricao.ds_prev_chegada,
        inscricao.ds_sabendo,
        inscricao.ds_foialuno
    ]);

    inscricao.id = resposta.insertId

    return resposta
}

export async function selecionarTodos(){

    const command=`
                select ID_INSCRICAO, NM_NOME, NM_SER_CHAMADO, DS_EMAIL,NR_TELEFONE,NM_BAIRRO,DS_PREV_CHEGADA,DS_SABENDO,DS_FOIALUNO,BT_VISITOU
                from tb_inscricao`;

    const [resp]=await conexao.query(command,[]);
    
    return resp;
}

export async function selecionarVisitantes(){

    const command=`
                select ID_INSCRICAO, NM_NOME, NM_SER_CHAMADO, DS_EMAIL,NR_TELEFONE,NM_BAIRRO,DS_PREV_CHEGADA,DS_SABENDO,DS_FOIALUNO,BT_VISITOU
                from tb_inscricao
                    WHERE BT_VISITOU=true`;

    const [resp]=await conexao.query(command,[]);
    
    return resp;
}

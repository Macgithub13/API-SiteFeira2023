import { Router } from "express";
import { inserir,selecionarTodos,selecionarVisitantes  } from '../repository/inscricaoRepository.js'


let endpoint = Router();

endpoint.post('/inserir', async (req, resp) => {
    try {
        let inscricao = req.body

        if (!inscricao.nm_nome)
            throw new Error('Campo nome obrigatório')

        if (!inscricao.nm_ser_chamado)
            throw new Error('Campo qual nome deseja ser chamado obrigatório')

        if (!inscricao.ds_email)
            throw new Error('Campo email obrigatório')

        if (!inscricao.ds_email)
            throw new Error('Campo email obrigatório')

        if (!inscricao.nr_telefone)
            throw new Error('Campo telefone obrigatório')

        if (!inscricao.nm_bairro)
            throw new Error('Campo bairro obrigatório')

        if (!inscricao.ds_prev_chegada)
            throw new Error('Campo previsão de chegada obrigatório')

        if (!inscricao.ds_sabendo)
            throw new Error('Campo como conheceu o FREI obrigatório')

        if (!inscricao.ds_foialuno)
            throw new Error('Campo ja foi aluno do FREI obrigatório')

        const inscricaoinserida = await inserir(inscricao);
        resp.send(inscricaoinserida)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

endpoint.get('/inscricao/quantidade', async (req,resp) => {

    try{

        const respostaAPI= await selecionarTodos();

        resp.send(respostaAPI.length.toString());
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        });
    }
});

endpoint.get('/inscricao/visitantes', async (req,resp) => {

    try{

        const respostaAPI= await selecionarVisitantes();

        resp.send(respostaAPI.length.toString());
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        });
    }
});

export default endpoint;
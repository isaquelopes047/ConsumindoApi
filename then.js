//  THEN (Então) basicamente com aquela resposta do fetch
//  faça algo com a resposta

/* EXEMPLO DE OBJETO JSON RETORNADO COM .THEN */
/* 
{
    "cep": "88390-000",
    "logradouro": "",
    "complemento": "",
    "bairro": "",
    "localidade": "Barra Velha",
    "uf": "SC",
    "ibge": "4202107",
    "gia": "",
    "ddd": "47",
    "siafi": "8041"
}
*/

const meuCep = 88390000;

var consultaCep = fetch(`https://viacep.com.br/ws/${meuCep}/json/`)
    .then(resposta => resposta.json()) //convertemos a resposa da promisse em json
    .then(r => {
        
        if(!r.erro) {
            console.log(r) //Acessamos as propriedades do Objeto com ., ou seja resposta.cep    
        } else {
            throw Error('Erro de Cep')
        }})

    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento concluido'))
console.log(consultaCep)


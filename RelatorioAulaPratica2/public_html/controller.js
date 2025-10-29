/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Esta função será chamada quando o usuário sair do campo CEP (onblur)

var cep;

function buscarEndereco() {
    
    // 1. Pegamos o valor do campo CEP e limpamos tudo que não for número.
    cep = document.getElementById('cep').value.replace(/\D/g, ''); 

    // Se o CEP tiver menos de 8 dígitos, não fazemos nada.
    if (cep.length !== 8) {
        alert("O CEP deve ter 8 números.");
        limparCamposAutomaticos();
        return;
    }
    
    // 2. Montamos o endereço (URL) da API ViaCEP
    let url = 'https://viacep.com.br/ws/' + cep + '/json/';
    
    // 3. Criamos o objeto que vai fazer a requisição pela internet (XMLHttpRequest)
    let requisicao = new XMLHttpRequest();
    
    // Abrimos a conexão para buscar os dados
    requisicao.open('GET', url, true); 

    // 4. Definimos o que fazer depois que a internet responder
    requisicao.onreadystatechange = function() {
        
        // Se a requisição terminou (readyState 4) e deu certo (status 200)
        if (requisicao.readyState === 4 && requisicao.status === 200) {
            
            // Transformamos o texto (JSON) em um objeto que o Javascript entende
            let dados = JSON.parse(requisicao.responseText);

            // Verificamos se o CEP foi encontrado (a API ViaCEP retorna 'erro' se não encontrar)
            if (dados.erro) {
                alert("CEP não encontrado.");
                limparCamposAutomaticos();
            } else {
                // 5. Preenchemos os campos do HTML com os dados da API
                // Preenche a Rua e remove 'readonly' se o campo vier vazio (logradouro)
                document.getElementById('rua').value = dados.logradouro;
                if(dados.logradouro === ""){
                    document.getElementById('rua').removeAttribute('readonly');
                }
                
                // Preenche o Bairro e remove 'readonly' se o campo vier vazio
                document.getElementById('bairro').value = dados.bairro;
                if(dados.bairro === ""){
                    document.getElementById('bairro').removeAttribute('readonly');
                }
                document.getElementById('cidade').value = dados.localidade;
                document.getElementById('estado').value = dados.uf;
                
                //Libera o botão, pois a busca foi um sucesso!
                document.getElementById('btn').removeAttribute('disabled');
            }
        }
    };

    // 6. Enviamos a requisição
    requisicao.send();
}

// Função auxiliar para limpar a Rua, Bairro, Cidade e Estado
function limparCamposAutomaticos() {
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
    
    document.getElementById('rua').setAttribute('readonly', 'readonly');
    document.getElementById('bairro').setAttribute('readonly', 'readonly');
    document.getElementById('btn').setAttribute('disabled', 'disabled');
}
/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/* ARQUIVO: main.js */
/* Objetivo: Consumo da API ViaCEP para preenchimento automático do endereço [cite: 345, 415] */

// Usamos JQuery para vincular a função ao evento 'blur' do campo CEP
$(document).ready(function() {
    
    // Função disparada ao sair (blur) do campo CEP
    $('#cep').blur(function() {
        
        // Limpa o CEP para conter apenas dígitos
        let cep = $(this).val().replace(/\D/g, ''); 

        // Verifica se o CEP tem o tamanho correto
        if (cep != "") {
            // Expressão regular simples para validar 8 dígitos
            let validacep = /^[0-9]{8}$/;

            // Se o formato do CEP for válido
            if(validacep.test(cep)) {

                // Coloca um valor temporário de '...' nos campos enquanto espera
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#estado").val("...");

                // Consulta a API ViaCEP usando JQuery.ajax()
                $.ajax({
                    url: 'https://viacep.com.br/ws/'+ cep +'/json/',
                    dataType: 'json',
                    success: function(dados) {
                        // Se o CEP foi encontrado (sem erro)
                        if (!("erro" in dados)) {
                            // Preenche os campos do formulário
                            $("#rua").val(dados.logradouro);
                            $("#bairro").val(dados.bairro);
                            $("#cidade").val(dados.localidade);
                            $("#estado").val(dados.uf);
                        } else {
                            // CEP não encontrado. Limpa e alerta.
                            limparCamposEndereco();
                            alert("CEP não encontrado.");
                        }
                    },
                    error: function() {
                        limparCamposEndereco();
                        alert("Erro na requisição da API ViaCEP.");
                    }
                });
            } else {
                // CEP inválido (formato)
                limparCamposEndereco();
                alert("Formato de CEP inválido.");
            }
        } else {
            // Campo CEP vazio
            limparCamposEndereco();
        }
    });
});

// Função auxiliar para limpar os campos de endereço
function limparCamposEndereco() {
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#estado").val("");
}
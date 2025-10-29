/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/* ARQUIVO: validation.js */
/* Objetivo: Implementar a validação de campos usando JQuery [cite: 346] */

$(document).ready(function() {
    
    // Função para validar o formato do e-mail usando Expressão Regular (Regex) [cite: 392]
    function validarEmail(email) {
        // Regex básica que verifica a estrutura: texto@texto.domínio
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    }
    
    // Ação ao clicar no botão de submissão do formulário
    $('#cadastroForm').submit(function(e) {
        
        let formValido = true;
        
        // 1. Validação do E-mail [cite: 346]
        let emailInput = $('#email');
        let emailValue = emailInput.val();
        
        if (emailValue === "") {
            // Se estiver vazio, o 'required' do HTML já cuida, mas validamos aqui também.
            emailInput.addClass('is-invalid');
            $('#email-feedback').text('O campo e-mail é obrigatório.');
            formValido = false;
        } else if (!validarEmail(emailValue)) {
            // Se o formato não for válido (Regex)
            emailInput.addClass('is-invalid');
            $('#email-feedback').text('O e-mail digitado não está em um formato válido.');
            formValido = false;
        } else {
            // E-mail válido
            emailInput.removeClass('is-invalid').addClass('is-valid');
        }
        
        // 2. Validação simples de outros campos (Apenas para obrigar o preenchimento)
        // O JQuery facilita a iteração sobre vários campos:
        
        $('input[required]').each(function() {
            if ($(this).val() === "") {
                $(this).addClass('is-invalid');
                formValido = false;
            } else {
                $(this).removeClass('is-invalid').addClass('is-valid');
            }
        });
        
        // 3. Resultado da Validação
        if (!formValido) {
            e.preventDefault(); // Impede o envio do formulário (submissão)
            alert("Por favor, preencha corretamente todos os campos obrigatórios.");
        } else {
            // Se tudo estiver OK, o formulário seria enviado para o servidor.
            alert("Formulário validado com sucesso! Pronto para envio.");
            // Impedimos o envio aqui para fins de teste didático:
            e.preventDefault(); 
        }
    });
});
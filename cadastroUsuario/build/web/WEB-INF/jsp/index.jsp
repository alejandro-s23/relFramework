<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Formulário de Cadastro</title>
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
              rel="stylesheet" 
              integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
              crossorigin="anonymous">
        
        <link rel="stylesheet" type="text/css"  href="style.css">
    </head>
    <body>
        
        <div class="container my-5">
    
            <h1 class="text-center mb-5 text-primary">Formulário de Cadastro</h1>

            <div class="card shadow-lg p-3">
                <div class="card-body">

                    <form>

                        <h4 class="mb-3 text-secondary">Dados Pessoais</h4>
                        <div class="row">

                            <div class="col-md-6 mb-3">
                                <label for="nome" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="nome" placeholder="Nome" required>
                            </div>

                            <div class="col-md-6 mb-3">
                                <label for="sobrenome" class="form-label">Sobrenome</label>
                                <input type="text" class="form-control" id="sobrenome" placeholder="Sobrenome" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="nome@exemplo.com" required>
                            </div>

                            <div class="col-md-6 mb-3">
                                <label for="senha" class="form-label">Senha</label>
                                <input type="password" class="form-control" id="senha" placeholder="Senha" required>
                            </div>
                        </div>

                        <h4 class="mt-4 mb-3 text-secondary">Endereço</h4>
                        <div class="row">

                            <div class="col-md-4 mb-3">
                                <label for="cep" class="form-label">CEP</label>
                                <input type="text" class="form-control" id="cep" placeholder="CEP" required>
                            </div>

                            <div class="col-md-8 mb-3">
                                <label for="rua" class="form-label">Rua</label>
                                <input type="text" class="form-control" id="rua" placeholder="Rua" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="bairro" class="form-label">Bairro</label>
                                <input type="text" class="form-control" id="bairro" placeholder="Bairro" required>
                            </div>

                            <div class="col-md-6 mb-3">
                                <label for="cidade" class="form-label">Cidade</label>
                                <input type="text" class="form-control" id="cidade" placeholder="Cidade" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label for="estado" class="form-label">Estado</label>
                                <input type="text" class="form-control" id="estado" placeholder="Estado (UF)" required>
                            </div>

                            <div class="col-md-4 mb-3">
                                <label for="numero" class="form-label">Número</label>
                                <input type="text" class="form-control" id="numero" placeholder="Número" required>
                            </div>

                            <div class="col-md-4 mb-3">
                                <label for="complemento" class="form-label">Complemento</label>
                                <input type="text" class="form-control" id="complemento" placeholder="Complemento">
                            </div>
                        </div>

                        <div class="form-check mb-4">
                            <input class="form-check-input" type="checkbox" value="" id="termos" required>
                            <label class="form-check-label" for="termos">
                                Eu concordo com os termos de serviço.
                            </label>
                        </div>

                        <button class="btn btn-success btn-lg w-100" type="submit">CADASTRAR E VERIFICAR</button>
                    </form>

                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
                integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
                crossorigin="anonymous"></script>
    </body>
</html>

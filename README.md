# 📂 Repositório: Frameworks para Desenvolvimento de Software
## Análise e Desenvolvimento de Sistemas (Unopar)

Este repositório contém os códigos-fonte e os projetos desenvolvidos durante as Aulas Práticas da disciplina "Framework para Desenvolvimento de Software" do curso de Análise e Desenvolvimento de Sistemas (Unopar). Os projetos focam na integração de tecnologias Front-end, Back-end e na configuração de ambientes.

---

## 🎯 Objetivos das Aulas Práticas

Os projetos têm como foco a aplicação prática dos seguintes conceitos:

* **Configuração de Ambiente:** Integração de IDE (NetBeans), JDK e Servidor de Aplicações (Apache Tomcat 9.0).
* **Desenvolvimento Web Moderno:** Utilização de HTML5, CSS3, Javascript e o Framework de Estilos **Bootstrap 5**.
* **Consumo de API:** Implementação de requisições assíncronas para consumo da API pública **ViaCEP**.
* **Estrutura de Aplicações:** Desenvolvimento de projetos baseados no Framework **Spring Web MVC**.
* **Qualidade de Código:** Implementação de validação de formulário robusta com a biblioteca **JQuery** e **Expressões Regulares (Regex)**.

---

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologia | Uso Principal |
| :--- | :--- | :--- |
| **Linguagens** | Java, HTML5, CSS3, Javascript, JSP | Lógica de aplicação e interface de usuário. |
| **Servidor/Runtime**| Apache Tomcat 9.0 | Servidor de aplicações para projetos Java Web. |
| **Frameworks/Libs**| Spring Web MVC | Estrutura back-end (Prática 1 e 3). |
| | Bootstrap 5 | Estilização responsiva e componentes de UI. |
| | JQuery | Manipulação de DOM e validação de formulário (Prática 4). |
| **Ferramentas** | NetBeans IDE | Ambiente de desenvolvimento. |

---

## 📁 Estrutura dos Projetos

Os projetos estão organizados em pastas, refletindo a ordem das aulas práticas.

| Pasta | Descrição | Principais Tecnologias |
| :--- | :--- | :--- |
| **RelatorioAulaPratica1** | Configuração inicial do ambiente Tomcat 9.0 com um projeto base Spring Web MVC. | Java, Tomcat, Spring MVC |
| **RelatorioAulaPratica2** | Formulário de endereço com consumo de API ViaCEP via Javascript puro. | HTML5, Bootstrap 5, Javascript |
| **cadastroUsuario** | **(Nome requisitado pela Universidade)** Formulário de cadastro de 12 campos estruturado com Spring Web MVC e estilizado via Bootstrap 5. | Java, Spring MVC, Bootstrap 5 |
| **RelatorioAulaPratica4** | Formulário de cadastro com consumo de API (`main.js`) e validação de campos obrigatórios/E-mail via **JQuery** (`validation.js`). | HTML5, Bootstrap 5, Javascript, JQuery |

---

## 🚀 Como Executar

Para executar os projetos Spring Web MVC (Práticas 1 e 3), siga os passos abaixo:

1.  **Pré-requisitos:** Certifique-se de ter o **Java JDK** e o **Apache Tomcat 9.0** instalados e configurados.
2.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/alejandro-s23/relFramework.git
    ```
3.  **Importe no NetBeans:** Abra a IDE NetBeans e utilize a opção "Open Project" para importar as pastas `RelatorioAulaPraticaX`.
4.  **Configurar Tomcat:** Confirme se o Tomcat 9.0 está configurado nas propriedades de cada projeto Java Web.
5.  **Executar:** Clique com o botão direito no projeto e selecione **Run**.

*Observação: Os projetos **Prática 2 e 4** são puramente Front-end (HTML/JS) e podem ser abertos diretamente no navegador.*

---

## 📝 Documentação e Relatório

A documentação completa dos procedimentos, adaptações e resultados de cada aula prática (incluindo printscreens das telas de execução) encontra-se no Relatório Final entregue à instituição.

* **Adaptação Principal:** A execução foi realizada em ambiente **Linux**, exigindo adaptação na configuração do Tomcat (permissões com `chmod +x *.sh`).
* **Desenvolvedor:** Alejandro Souza

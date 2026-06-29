// ===============================
// FORMULÁRIO DE ORÇAMENTO
// ===============================

const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        if (nome === "" || email === "") {

            alert("Preencha todos os campos!");

            return;

        }

        document.getElementById("mensagem").innerHTML =
            "✅ Solicitação enviada com sucesso!";

        formulario.reset();

    });

}

// ===============================
// FORMULÁRIO DE CONTATO
// ===============================

const formContato = document.getElementById("formContato");

if (formContato) {

    formContato.addEventListener("submit", function (event) {

        event.preventDefault();

        document.getElementById("mensagemContatoResposta").innerHTML =
            "✅ Mensagem enviada com sucesso!";

        formContato.reset();

    });

}

// ===============================
// FILTRO DO CATÁLOGO
// ===============================

function filtrar(categoria) {

    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(function(produto){

        if(categoria === "todos"){

            produto.style.display = "block";

        }

        else if(produto.classList.contains(categoria)){

            produto.style.display = "block";

        }

        else{

            produto.style.display = "none";

        }

    });

}

// ===============================
// PESQUISA DE PRODUTOS
// ===============================

const pesquisa = document.getElementById("pesquisa");

if (pesquisa) {

    pesquisa.addEventListener("keyup", function () {

        let texto = pesquisa.value.toLowerCase();

        let produtos = document.querySelectorAll(".produto");

        produtos.forEach(function (produto) {

            let nome = produto.querySelector("h3").textContent.toLowerCase();

            if (nome.includes(texto)) {

                produto.style.display = "block";

            } else {

                produto.style.display = "none";

            }

        });

    });

}
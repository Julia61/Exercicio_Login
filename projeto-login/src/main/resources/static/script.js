

async function cadastro() {
    const usuario = document.getElementById("usuarioCadastro").value;
    const email = document.getElementById("emailCadrastro").value;
    const senha = document.getElementById("senhaCadrastro").value;

    try {
        const response = await fetch("http://localhost:8080/login/valoresLogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ usuario,email,senha })
        });

        if (response.ok) {
            const resultado = await response.text();
            if (resultado === "conectado") {
                window.location.href = 'paginaLogin.html';

            }
        } else {
            const erro = await response.text();
            alert(erro);
        }
    } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
        alert("Erro ao conectar com o servidor.");
    }
}




/*
function cadastro() {
    const nomeUsuario = document.getElementById("usuarioCadastro").value;

    if(nomeUsuario == "Julia"){

        window.location.href = 'paginaLogin.html';
    }else{
        alert("erro")
    }


}
*/
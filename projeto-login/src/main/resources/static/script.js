
async function logar() {
    const usuario = document.getElementById("usuariologin").value;
    const email = document.getElementById("emaillogin").value;
    const senha = document.getElementById("senhalogin").value;

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
            document.getElementById("usuariologin").value = "";
            document.getElementById("emaillogin").value = "";
            document.getElementById("senhalogin").value = "";
        }
    } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
        alert("Erro ao conectar com o servidor.");
    }
}





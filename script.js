const botao = document.querySelector("#exibir");
botao.addEventListener("click", (e)=>{
    e.preventDefault();
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const senha = document.querySelector("#senha");

    const NOME = nome.value;
    const EMAIL = email.value;
    const SENHA = senha.value;
    
    if (NOME !== "" && EMAIL !=="" && SENHA !=="") {
        alert(`Seu nome: ${NOME}\nSeu e-mail: ${EMAIL}\nSua senha: ${SENHA}`);
        nome.value = '';
        email.value = '';
        senha.value = '';
        
    } else {
        alert("Preencha todos os campos!");
    }

});
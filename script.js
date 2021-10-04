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
        if (!checkEmail(EMAIL)) {
            alert("Email Inválido!");
        } else if(!checkNome(NOME)) {
            alert("Nome Inválido!");
        } else if(!checkSenha(SENHA)) {
            alert("Senha curta! Insira uma senha com mais de 6 (seis) caracteres).");
        } else {
            alert(`Seu nome: ${NOME}\nSeu e-mail: ${EMAIL}\nSua senha: ${SENHA}`);
            nome.value = '';
            email.value = '';
            senha.value = '';            
        }        
    } else {
        alert("Preencha todos os campos!");
    }

});

function checkEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function checkNome(nome){
    const regex = /^((?!.*[\u00D7\u00F7\u01C0-\u01C3])[a-z\u00C0-\u02AF´]{1,}\s?)((?!.*[\u00D7\u00F7\u01C0-\u01C3])[a-z\u00C0-\u02AF'´]?\s?)+$/i;
    return regex.test(String(nome));
}

function checkSenha(senha){
    return senha.length >= 6;
}
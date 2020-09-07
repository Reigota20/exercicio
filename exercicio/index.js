// index.js
// DECLARACAO da funcao validar()
function validar() {
	// inicio da function validar()
	// recuperar valores das caixas de texto (INPUT)
	var nome = formSignUp.nome.value;
	var email = formSignUp.email.value;
	var senha = formSignUp.senha.value;
	var confirm_senha = formSignUp.confirm_senha.value;
	console.log(nome);

	var usuario = document.getElementById('nomeUsuario').value;
	console.log(usuario);

	var msgErro = document.getElementById('msg_erro');
	console.log(msgErro);

	if (nome === '') {
		// alert('Nome é obrigatório');
		// armazendo informacao dentro do INPUT (proriedade VALUE)
		formSignUp.nome.value = 'Faltou o nome.';
		// propriedade innerHTML vai injetar uma informação
		// dentro do elemento HTML (no caso SPAN)
		msgErro.innerHTML = 'Nome é obrigatório';
		// metodo focus() coloca o cursor dentro da caixa de texto
		formSignUp.nome.focus();
		return false;
    }

	if (email === '') {
		// alert('Email é obrigatório');
		msgErro.innerHTML = 'E-mail é obrigatório';
		formSignUp.email.focus();
		return false;
	}

	// senha deve ter mais de 3 caracteres (caso contrario msg erro)
	// senha e confirm_senha devem ser iguais (caso contrario msg erro)

	if (senha === '') {
		// alert('Senha é obrigatório');
        msgErro.innerHTML = 'Senha é obrigatório';
        msgErro.innerHTML = 'Senha tem que ter mais de 3 caracters';
		formSignUp.senha.focus();
		return false;
	}

	if (confirm_senha === '') {
		// alert('Confirm Senha é obrigatório');
        msgErro.innerHTML = 'ConfirmSenha é obrigatório';
        msgErro.innerHTML ='ConfirmSenha tem que ser igual a senha';
		formSignUp.confirm_senha.focus();
		return false;
	}
} // fim da funcao validar()
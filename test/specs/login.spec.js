var config = require('../config/main-config');
import Login_PO from '../pageObjects/Login_PO.js';

describe("Testes de Login", () => {
	it("Teste com Usuário Válido", async function(){
		await browser.url("https://serasa.dev");
		await Login_PO.loginValido();
	})

	it("Teste com Usuário Inválido", async function(){
		await Login_PO.loginInvalido();    	
	})

});
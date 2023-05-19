var config = require('../config/main-config');
import Login_PO from '../pageObjects/Login_PO.js';
import SolicitaEmprestimo_PO from '../pageObjects/SolicitaEmprestimo_PO.js';

describe("Solicita Empréstimo", () => {
	it("Teste Solicita Empréstimo - Banco PAN", async function(){
		await Login_PO.open();
		await Login_PO.loginValido();
		await SolicitaEmprestimo_PO.solicitaEmprestimoBancoPan();
		await browser.pause(3000);
	})

});
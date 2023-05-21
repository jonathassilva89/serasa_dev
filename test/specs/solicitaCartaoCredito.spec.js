var config = require('../config/main-config');
import Login_PO from '../pageObjects/Login_PO.js';
import SolicitaCartaoCredito_PO from '../pageObjects/SolicitaCartaoCredito_PO.js';

describe("Solicita Cartão de Crédito", () => {
	it("Teste Solicita Cartão PicPay", async function(){
		await browser.url("https://serasa.dev");
		await Login_PO.loginValido();
		await SolicitaCartaoCredito_PO.solicitaCartaoCredito();
		await browser.pause(3000);
	})

});
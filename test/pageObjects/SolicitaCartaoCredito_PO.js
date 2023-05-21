var config = require('../config/main-config');

class SolicitaCartaoCredito_PO {
    get botaoSolucoes() { 
        return $("//a[contains(text(), 'Soluções')]");
    }

    get botaoSolicitaCartaoCredito() { 
        return $("//span[contains(text(), 'Solicitar cartão de crédito')]");
    }

    get botaOfertasCartao() { 
        return $("//a[@href='/area-cliente/solucoes/ofertas-cartao']");
    }

    get botaoPedirCartaoPicPay() { 
        return $("/html//div[@id='__next']/div/div[3]/div[2]/div/div/div[4]//button[@type='button']");
    }
    

    solicitaCartaoCredito(){
        super.solicitaCartaoCredito();
    }

    async solicitaCartaoCredito() {
        //Clica no botão Soluções
        await this.botaoSolucoes.click();
        //Clica no botão Solicitar Cartão de Cédito
        await this.botaoSolicitaCartaoCredito.waitForClickable();
        await this.botaoSolicitaCartaoCredito.click();
        //Clica no botão Ver outras Ofertas
        await this.botaOfertasCartao.waitForClickable();
        await this.botaOfertasCartao.click();
        //Clica no botão Continuar
        await this.botaoPedirCartaoPicPay.waitForClickable();
        await this.botaoPedirCartaoPicPay.click();
        await browser.pause(5000);
    }

}
export default new SolicitaCartaoCredito_PO();
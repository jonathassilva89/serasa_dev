var config = require('../config/main-config');
import Base_PO from './Base_PO';

class SolicitaEmprestimo_PO extends Base_PO {
    open() {
        super.open("");
    }

    get botaoSolucoes() { 
        return $("//a[contains(text(), 'Soluções')]");
    }

    get botaoSolicitaEmprestimo() { 
        return $("//span[contains(text(), 'Solicitar empréstimo')]");
    }

    get botaoSolicitaEmprestimoBancoPan() { 
        return $("/html//div[@id='__next']/div/div[3]/div[2]/div/div/div[2]//button[@type='button']");
    }

    get comboTipoConta() { 
        return $("//select[@name='42']");
    }

    get comboBanco() { 
        return $("//select[@name='40']");
    }

    get inputNumeroAgencia() { 
        return $("//input[@name='41']");
    }

    get inputNumeroConta() { 
        return $("//input[@name='43']");
    }

    get inputDigitoConta() { 
        return $("//input[@name='135']");
    }

    get campoObrigatorio() { 
        return $("//li[contains(text(), 'Este campo é obrigatório')]");
    }

    get minimoQuatroCaracteres() { 
        return $("//li[contains(text(), 'Informe no mínimo 4 caractere(s)')]");
    }

    get botaoContinue() { 
        return $("//button[contains(text(), 'Continue')]");
    }

    get inputNumeroCelular() { 
        return $("//input[@name='26']");
    }

    get numeroCelularValido() { 
        return $("//li[contains(text(), 'Deve conter o DDD e o número de um celular válido.')]");
    }

    get botaoContinuePG2() { 
        return $("//app-root/div[@class='container-main']//app-credit-wizard[@class='ng-star-inserted']/app-partner-questions[@class='ng-star-inserted']//app-form-by-step/form/div[2]/div[2]/div/button[1]");
    }

    get comboEstadoCivil() { 
        return $("//select[@name='198']");
    }

    get radioSexoFeminino() { 
        return $("//span[contains(text(), 'Feminino')]");
    }

    get radioSexoMasculino() { 
        return $("//span[contains(text(), 'Masculino')]");
    }

    get botaoContinuePG3() { 
        return $("//app-root/div[@class='container-main']//app-credit-wizard[@class='ng-star-inserted']/app-partner-questions[@class='ng-star-inserted']//app-form-by-step/form/div[2]/div[3]/div/button[1]");
    }

    get botaoContinuePG4() { 
        return $("//app-root/div[@class='container-main']//app-credit-wizard[@class='ng-star-inserted']/app-partner-questions[@class='ng-star-inserted']//app-form-by-step/form/div[2]/div[4]//button[@type='submit']");
    }
    
    get comboNacionalidade() { 
        return $("//select[@name='199']");
    }

    get comboEstadoNascimento() { 
        return $("//select[@name='222']");
    }

    get comboCidadeNascimento() { 
        return $("//select[@name='221']");
    }

    get inputNumeroRG() { 
        return $("//input[@name='200']");
    }
    
    get inputDataEmissao() { 
        return $("//input[@name='196']");
    }

    get comboOrgaoEmissor() { 
        return $("//select[@name='195']");
    }

    get comboEstadoEmissaoRG() { 
        return $("//select[@name='197']");
    }
    
    get inputNomeMae() { 
        return $("//input[@name='201']");
    }

    get revisaoPedido() { 
        return $("//span[contains(text(), 'Revisão do pedido')]");
    }

    get botaoEnviarAnalise() { 
        return $("//button[contains(text(), 'ENVIAR PARA ANÁLISE')]");
    }

    get botaoMeusPedidos() { 
        return $("//a[contains(text(), 'ACESSE MEUS PEDIDOS')]");
    }

    solicitaEmprestimoBancoPan(){
        super.solicitaEmprestimoBancoPan();
    }

    async solicitaEmprestimoBancoPan() {
        //Clica no botão Soluções
        await this.botaoSolucoes.click();
        //Clica no botão Solicitar Empréstimo
        await this.botaoSolicitaEmprestimo.waitForClickable();
        await this.botaoSolicitaEmprestimo.click();
        //Clica no botão Solicitar - Banco PAN
        await this.botaoSolicitaEmprestimoBancoPan.waitForClickable({timeout: 25000});
        await this.botaoSolicitaEmprestimoBancoPan.click();

        //Página 01
        //Clica no Combo Banco
        await this.comboBanco.waitForDisplayed();
        await this.comboBanco.click();
        //Seleciona Banco
        const selBanco = $("//select[@name='42']/option[2]");
        await selBanco.click(); 
        //Clica no Combo Tipo de Conta
        await this.comboTipoConta.click();
        //Seleciona Tipo de Conta
        const selTipoConta = $("//select[@name='40']/option[2]");
        await selTipoConta.click();
        //Informa Agência
        await this.inputNumeroAgencia.clearValue();
        //await expect(this.campoObrigatorio).toHaveText("Este campo é obrigatório");
        await this.inputNumeroAgencia.setValue("1500");
        //Informa Conta
        await this.inputNumeroAgencia.setValue("30");
        await expect(this.minimoQuatroCaracteres).toHaveText("Informe no mínimo 4 caractere(s)");
        await this.inputNumeroAgencia.setValue("5070");
        //Informa Dígito da Conta
        await this.inputDigitoConta.setValue("9");
        //Clica no Botão Continue
        await this.botaoContinue.click();

        //Página 02
        //Informa Número Celular
        await this.inputNumeroCelular.setValue("3333333333");
        await expect(this.numeroCelularValido).toHaveText("Deve conter o DDD e o número de um celular válido.");
        await this.inputNumeroCelular.setValue("33333333333");
        //Clica no Botão Continue
        await this.botaoContinuePG2.click();
       

        //Página 03
        //Clica no Combo Estado Civil
        await this.comboEstadoCivil.waitForClickable();
        await this.comboEstadoCivil.click();
        //Seleciona Estado Civil
        const selEstadoCivil = $("//select[@name='198']/option[4]");
        await selEstadoCivil.click();
        //Seleciona Sexo
        const selSexoFeminino = $("//span[contains(text(), 'Feminino')]");
        await selSexoFeminino.click();
        //Clica no Botão Continue
        await this.botaoContinuePG3.click();

        //Página 04
        //Clica no Combo Nacionalidade
        await this.comboNacionalidade.click();
        //Seleciona Nacionalidade
        const selNacionalidade = $("//select[@name='199']/option[2]");
        await selNacionalidade.click();
        //Clica no Combo Estado Nascimento
        await this.comboEstadoNascimento.click();
        //Seleciona Estado Nascimento
        const selEstadoNascimento = $("//select[@name='222']/option[25]");
        await selEstadoNascimento.click();
        //Clica no Combo Cidade Nascimento
        await this.comboCidadeNascimento.click();
        //Seleciona Cidade Nascimento
        const selCidadeNascimento = $("//select[@name='221']/option[40]");
        await selCidadeNascimento.click();
        //Informa Número do RG
        await this.inputNumeroRG.setValue("9999999999999");
        //Informa Data de Emissão do RG
        await this.inputDataEmissao.setValue("10/12/1995");
        //Clica no Combo Órgão Emissor do RG
        await this.comboOrgaoEmissor.click();
        //Seleciona Órgão Emissor do RG
        const selOrgaoEmissorRG = $("//select[@name='195']/option[42]");
        await selOrgaoEmissorRG.click();
        //Clica no Combo Estado Emissor do RG
        await this.comboEstadoEmissaoRG.click();
        //Seleciona Órgão Emissor do RG
        const selEstadoEmissorRG = $("//select[@name='197']/option[25]");
        await selEstadoEmissorRG.click();
        //Informa Nome da Mãe
        await this.inputNomeMae.setValue("Maria José dos Santos");
        //Clica no Botão Continue
        await this.botaoContinuePG4.click();

        //Revisão do Pedido
        //Clica no Botão Enviar para Análise
        await expect(this.revisaoPedido).toHaveText("Revisão do pedido");
        await this.botaoEnviarAnalise.click();
        //Acessr Meus Pedidos
        await this.botaoMeusPedidos.waitForClickable();
        await this.botaoMeusPedidos.click();
        await browser.pause(5000);
    }

}
export default new SolicitaEmprestimo_PO();
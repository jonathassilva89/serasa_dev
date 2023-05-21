var config = require("../config/main-config");
import Base_PO from "./Base_PO";

class Login_PO extends Base_PO {
  open() {
    super.open("");
  }

  get botaoLogin() {
    return $("//button[@href='/cadastrar']");
  }

  get inputCPF() {
    return $("//input[@name='cpf']");
  }

  get botaoContinuarLogin() {
    return $("//button[@type='submit']");
  }

  get inputSenha() {
    return $("//input[@name='password']");
  }

  get botaoInicio() {
    return $("//a[contains(text(), 'Início')]");
  }

  get menuUsuario() {
    return $(
      "/html//div[@id='__next']//div[@class='jsx-4025504645 maria-header']/div[2]/button[@type='button']"
    );
  }

  get botaoSair() {
    return $("//button[contains(text(), 'Sair')]");
  }

  get labelCPFInvalido() {
    return $("//p[contains(text(), 'CPF inválido')]");
  }

  get labelSenhaIncorreta() {
    return $(
      "//p[contains(text(), 'Dados incorretos. Confira seu usuário e senha e tente novamente')]"
    );
  }

  get botaoFecharBanner() {
    return $(
      "//div[@class='jsx-3007104052 modal modal--show whats-new-modal jsx-3903223811']//button[@aria-label='Fechar']//*[name()='svg']"
    );
  }

  loginValido() {
    super.loginValido();
  }

  loginInvalido() {
    super.loginInvalido();
  }

  loginInvalido1() {
    super.loginInvalido1();
  }

  async loginValido() {
    //Clica no botão Login
    await this.botaoLogin.click();
    //Informa um CPF Válido
    await this.inputCPF.setValue(config.usuarioValido);
    //Clica no botão Continuar
    await this.botaoContinuarLogin.click();
    //Informa a Senha
    await this.inputSenha.setValue(config.senhaValida);
    //Clica no botão Continuar
    await this.botaoContinuarLogin.click();
    await browser.pause(10000);
    //Verifica se exibe Banner inicial
    if (await this.botaoFecharBanner.isDisplayed()) {
      //Se existe, fecha o Banner
      await this.botaoFecharBanner.click();
      await expect(this.botaoInicio).toHaveText("Início");
      console.log("Login realizado com sucesso!");
    } else {
      await expect(this.botaoInicio).toHaveText("Início");
      console.log("Login realizado com sucesso!");
    }
  }

  async loginInvalido1() {
    //Clica no botão Login
    await this.botaoLogin.click();
    //Informa um CPF Inválido
    await this.inputCPF.setValue(config.usuarioInvalido);
    //Valida se mensagem está sendo exibida
    await expect(this.labelCPFInvalido).toHaveText("CPF inválido");
    console.log("Login não realizado! CPF Inválido!");
    //Informa um CPF Válido
    await this.inputCPF.setValue(config.usuarioValido);
    //Clica no botão Continuar
    await this.botaoContinuarLogin.click();
    //Informa a Senha incorreta
    await this.inputSenha.setValue(config.senhaInvalida);
    //Clica no botão Continuar
    await this.botaoContinuarLogin.click();
    //Valida se mensagem está sendo exibida
    await this.labelSenhaIncorreta.isExisting();
    await expect(this.labelSenhaIncorreta).toHaveText("Dados incorretos. Confira seu usuário e senha e tente novamente.");
    console.log("Login não realizado! Senha incorreta!");
  }

  async loginInvalido() {
    //Verifica se botão Sair existe
    if (await this.botaoSair.isExisting()) {
      //Se existe, clica no Menu do Usuário
      await this.menuUsuario.click();
      //Clica no botão Sair
      await this.botaoSair.click();
      await this.loginInvalido1();
    } else {
      await this.loginInvalido1();
    }
  }
}
export default new Login_PO();

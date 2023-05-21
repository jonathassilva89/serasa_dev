# Introduction
Serava_dev Automation Project
Este Projeto foi criado utilizando a linguagem Javascript e usa WebDriver.io como framework de automação.

1.  Instalação   
- npm init   
- npm init wdio .
- npm install -g allure-commandline --save-dev
- npm i allure-commandline

# Execução de Testes
Para execução em Paralelo:
    Renomear o arquivo "wdio.conf_execucaoParalelo.js" para "wdio.conf.js";

Para selecionar o Browser:
    Renomear o arquivo "wdio.conf_selecionaBrowser.js" para "wdio.conf.js";
    Informa o Browser (chrome, firefox) no arquivo "main-config".

Execução via linha de comando utilizando Visual Studio Code  
- npx wdio wdio.conf.js --suite nomeDaSuite (Exemplo: npx wdio wdio.conf.js --suite login)
    Para executar mais de uma suite ao mesmo tempo, utilizar o exemplo abaixo:
    npx wdio wdio.conf.js --suite login --suite solicitaEmprestimo --suite solicitaCartaoCredito

Execução via Jenkins
-- Iniciar Jenkins
- Configurar variável de ambiente JAVA_home (possuir Java 11 ou 17 instalado)
- Executar o comando: java -jar jenkins.war
- Login: jonathassilva89
- Senha: jonathassilva89
- Acessar projeto "automacao-serasa_dev"
- Acessar "Build with Parameters"
- Selecionar uma opção e clicar em Build

Para executar o Relatório
- npx allure open

# Softwares
- [Visual Studio Code](https://github.com/Microsoft/vscode)- 
- [NodeJS](https://nodejs.org/en/)
- [WebDriver.IO](https://webdriver.io/)
- [Mocha](https://mochajs.org/)
- [Allure Report](https://qameta.io/allure-report/)
# ignews
Chalenge by rocketseat: <br/>
https://www.figma.com/file/gl0fHkQgvaUfXNjuwGtDDs/ig.news/duplicate

<h3>Installing Instructions:</h3>

1- Install Node
https://nodejs.org/en/

2- Install Yarn Package Manager
npm install -g yarn

3- run in the terminal:
yarn dev

PS: Caso tenha problema ao rodar o script no windows corrija seguindo esse tutorial:
https://pt.stackoverflow.com/questions/220078/o-que-significa-o-erro-execu%C3%A7%C3%A3o-de-scripts-foi-desabilitada-neste-sistema
Geralmente é só executar no powershell adm:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

4- Use o comando abaixo para instalar os pacotes usados no projeto como dependência
de desenvolvimento
yarn install -D

5- para rodar a aplicação
yarn dev 

6- lembrar de acrescentar os arquivos .env.local 
uma vez que os mesmos não estão aqui no github por questão de 
segurança.

7- Váriaveis de ambiente
STRIPE_API_KEY=<pegar lá a chave secreta do stripe, que é a solução de pagamentos>



<h3>Controle de versões:</h3> <br/>

"version": "0.1.0" --> Design das telas e dos botões, Integração stripe leitura do preço.

"version": "0.2.0" --> Integração com github e botão comprar funcionando





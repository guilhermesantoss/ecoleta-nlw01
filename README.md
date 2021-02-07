<img src="https://github.com/guilhermesantoss/ecoleta-nlw01/blob/master/web/src/assets/logo.svg" alt="Logo Ecoleta" />

<p>
  <img src="https://img.shields.io/github/repo-size/guilhermesantoss/ecoleta-nlw01?color=darkblue" alt="Repository Size" />
  <img src="https://img.shields.io/github/last-commit/guilhermesantoss/ecoleta-nlw01?color=darkblue" alt="Last Commit" />
  <img src="https://img.shields.io/github/languages/count/guilhermesantoss/ecoleta-nlw01?color=darkblue" alt="Languages Used" />
  <img src="https://img.shields.io/github/license/guilhermesantoss/ecoleta-nlw01?color=darkblue" alt="License" />
</p>

## Sobre o projeto

O projeto **Ecoleta** é uma aplicação totalmente voltada para fins ecológicos, onde na parte **Web** você cadastra pontos de coleta na área desejada e com isso as pessoas podem acessar a parte **Mobile** da aplicação e saber onde podem descartar seus resíduos da forma correta.

## Executando o Back-end

Começando pelo back-end, entre na pasta "server/" e instale todas as dependências do projeto utilizando o comando:
```bash
$ npm install
```

Agora vamos criar o Banco de Dados utilizando o comando:
```bash
$ npm run knex:migrate
```

Em seguida vamos popular a tabela de "items" utilizando o comando:
```bash
$ npm run knex:seed
```

Por fim, para deixar o servidor rodando, vamos executar o comando:
```bash
$ npm run dev
```

## Executando o Front-end

Com o nosso Back-end rodando, agora podemos iniciar o processo de instalação das dependências na pasta "web/" utilizando o comando:
```bash
$ npm install
```

Agora que as dependências estão devidamente instaladas, vamos executar o Front-end utilizando o comando:
```bash
$ npm start
```

## Executando o Mobile

Para executar a aplicação Mobile, é necessário ter instalado o [Expo](https://expo.io/learn) em sua máquina e no seu celular. Feito isso, instale as dependências do projeto na pasta "mobile/" utilizando o comando:
```bash
$ npm install
```

Agora que as dependências estão devidamente instaladas, vamos executar o Aplicativo Mobile utilizando o comando:
```bash
$ npm start
```

E agora para ver o APP Mobile funcionando no seu celular, abra o aplicativo do **Expo** e escaneie o QRCode.
<br />
**OBS: (No Iphone, eu abri minha câmera e apontei para o QRCode, automaticamente pediu para abrir o APP do Expo e funcionou tranquilo).**

## Tecnologias utilizadas

* [Node.js](https://nodejs.org/)
* [React](https://reactjs.org/)
* [React Native](https://reactnative.dev/)
* [Expo](https://expo.io/)
* [Typescript](https://www.typescriptlang.org/)

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

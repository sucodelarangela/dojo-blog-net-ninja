# The Dojo Blog

_For the English version of this README, click [here](#English)._

<div id="top" align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src=" 	https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
</div>

> Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

## 🔎 Visão geral

Protótipo de página de um blog chamado **Dojo Blog** desenvolvido sob orientação de [Shaun JP](https://github.com/iamshaunjp) focado no aprendizado e prática da biblioteca [**React.js**](https://pt-br.reactjs.org/) com JavaScript.

## ⚙️ Como instalar a aplicação na sua máquina

1. Faça o download deste repositório através do botão verde **Code** no topo da página e, em seguida, clicando em **Download ZIP**. Ou, se preferir, através do terminal (Git Bash, Powershell, etc.) usando o comando:

   ```bash
   git clone https://github.com/sucodelarangela/dojo-blog-net-ninja.git
   ```

2. Acesse a pasta do projeto com seu terminal;

3. Rode o comando `npm install` para instalar as dependências do projeto;

4. Após a instalação, será necessário inicializar a API que guarda os posts do blog para que a página funcione corretamente. Para isso, execute o comando abaixo no seu terminal:

   ```bash
   npx json-server --watch data/db.json --port 8000
   ```

   > Após executar o comando acima, você pode visualizar os dados da API no browser acessando o endereço http://localhost:8000/blogs

5. Para iniciar a aplicação, rode o comando `npm start` no terminal. Você deve receber a seguinte mensagem de confirmação:

   ```bash
     Compiled successfully!

     You can now view dojo-blog in the browser.

     Local: http://localhost:3000
     On Your Network: http://10.0.0.171:3000

     Note that the development build is not optimized.
     To create a production build, use npm run build.

     webpack compiled successfully
   ```

6. Para usar a aplicação, abra o seu browser preferido e acesse o endereço `http://localhost:3000/`

![](/public/screenshot.JPG)

[🔼 Voltar para o topo](#top)

---

<div id="English" style="font-style: italic;"></div>

_English version_

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🔎 Overview

A blog prototype called **Dojo Blog** developed under [Shaun JP](https://github.com/iamshaunjp)'s orientation with the objective of learning and practicing [**React.js**](https://reactjs.org/) library with JavaScript.

## ⚙️ How to install the app on your machine

1. Download this repository by clicking the green **Code** button on top of the page and then clicking **Download ZIP** option. Or use the following command on your terminal (Git Bash, Powershell, etc.):

   ```bash
   git clone https://github.com/sucodelarangela/dojo-blog-net-ninja.git
   ```

2. Access the project root folder on your terminal;

3. Run `npm install` to install all project dependencies;

4. After installing, it will be necessary to initialize the API which hosts the blogs infos or the page will not work properly. In order to do so, run the following command on your terminal:

   ```bash
   npx json-server --watch data/db.json --port 8000
   ```

   > After running the command above, you can view tha API data on your browser by accessing http://localhost:8000/blogs

5. To start the application, run `npm start` on yout terminal. You should receive the following message:

   ```bash
     Compiled successfully!

     You can now view dojo-blog in the browser.

     Local: http://localhost:3000
     On Your Network: http://10.0.0.171:3000

     Note that the development build is not optimized.
     To create a production build, use npm run build.

     webpack compiled successfully
   ```

6. To use the app, open your favorite browser and go to the URL `http://localhost:3000/`

![](/public/screenshot.JPG)

[🔼 Back to top](#top)

---

Developed with 🧡 by [@sucodelarangela 🍊](https://angelacaldas.vercel.app) (it's a me!) with guidance from [Shaun JP.](https://github.com/iamshaunjp)

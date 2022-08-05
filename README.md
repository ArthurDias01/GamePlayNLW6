<h1 align="center">
  <img alt="GamePlay" height="80" title="GamePlay" src=".github/logo.png" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033">

 <img src="https://img.shields.io/static/v1?label=NLW&message=06&color=E51C44&labelColor=0A1033" alt="NLW 06" />
</p>

![cover](.github/cover.png?style=flat)

## 💻 Projeto

[PT-BR]
Aplicativo para lhe ajudar a conectar-se e organiza o momento de diversão e jogar com os amigos. Crie grupos para jogar seus games favoritos com seus amigos com esse App que possui autenticação com Discord.

[EN]
Application to help you connect and organize the fun time and play with friends. Create groups to play your favorite games with your friends with this App that has Discord authentication.

## :hammer_and_wrench: Features

[PT-BR]
- [x] Autenticação Social OAuth2 com servidor do Discord.
- [x] Obtém perfil do usuário cadastro no Discord (username e avatar);
- [x] Lista os servidores do Discord que o usuário faz parte;
- [x] Permite realizar o agendamento de partidas;
- [x] Permite filtrar as partidas por categoria;
- [x] Exibe se a partida foi agendada em um servidor próprio (anfitrião) ou em servidores de outros (convidado);
- [x] Compartilha o convite para ingressar no servidor do usuário;
- [x] Permite redirecionar o usuário para o seu próprio servidor;
- [x] Disponibiliza a função de Logout.

[EN]

- [x] OAuth2 Social Authentication with Discord Server.
- [x] Get user profile registered on Discord (username and avatar);
- [x] Lists the Discord servers the user is a part of;
- [x] Allows you to schedule departures;
- [x] Allows you to filter as matches by category;
- [x] Shows whether the match was scheduled on a server of its own (host) or on servers of others (guest);
- [x] Shares the invitation to join the user's server;
- [x] Allows you to redirect the user to your own server;
- [x] Provides a Logout function.

## ✨ Tecnologias

- [x] React Native
- [x] Typescript
- [x] Expo
- [x] Context API
- [x] Async Storage
- [x] Vector Icons
- [x] React Native Svg e Svg Transform
- [x] Axios
- [x] Gradient colors
- [x] OAuth2 Discord
- [x] Expo Google Fonts
- [x] React Navigation Stack
- [x] React Native Gesture Handler
- [x] Expo Authentication
- [x] React Native Share
- [x] Deep Link

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/0kv33XYjvOgvKGKHBaiR07/GamePlay-NLW-Together?node-id=58913%3A83). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.

## Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

```cl
expo start
```

Lembre-se de criar o seu App no servidor do Discord para obter as credencias de autenticação. Em seguida, defina no arquivo .env as configurações do seu App (remova o example do arquivo .env.example).

```cl
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

<br />

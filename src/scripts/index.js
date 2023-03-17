import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";
import { getEvents } from "./services/events.js";

import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";


document.getElementById("btn-search").addEventListener("click", () => {
  // ADICIONANDO click no botão
  const userName = document.getElementById("input-search").value; // pegando o nome do usuário que foi digitado
  if (validateEmptyInput(userName)) return;
  getUserData(userName); // ele vai realizar a função apenas quando o nome estiver digitado e clicando no botão.
});

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;
  if (isEnterKeyPressed) {
    if (validateEmptyInput(userName)) return;
    getUserData(userName);
  }
});

function validateEmptyInput(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o nome do usuário do GitHub");
    return true;
  }
}

async function getUserData(userName) {  //função que mostra na tela o usuario
  const userResponse = await getUser(userName);
  
  if (userResponse.message === "Not Found") {
    screen.renderNotFound();
    return;
  }

  const repositoriesResponse = await getRepositories(userName);
  const eventsResponse = await getEvents(userName);

  user.setInfo(userResponse);
  user.setRepositories(repositoriesResponse);
  user.setEvents(eventsResponse);
  screen.renderUser(user);
}
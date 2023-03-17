const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                                    <img src="${user.avatarUrl}" alt="Foto de perfil do usuário"/>  
                                  <div class="data">
                                    <h1>${user.name ??"Não possui nome cadastrado 😢"}</h1>
                                    <p>${user.bio ??"Não possui bio cadastrada 😢"}</p>
                                    <p>👥 Seguidores: ${user.followers ?? "seguidores "}</p>
                                    <p>👤 Seguindo: ${user.following ?? "seguindo"}</p>
                                  </div>
                                  </div>`; // MOSTRANDO NA TELA AS INFORMAÇÕES DO USUARIO

    let repositoriesItens = "";
    user.repositories.forEach(
      (repo) =>
        (repositoriesItens += `<li>
                               <a href="${repo.html_url}" target = '_blank'>${repo.name}
                                    <div class="status-repositories"></div>
                               </a>
                               </li>`)
    );

    if (user.repositories.length > 0) {
      // MOSTRANDO NA TELA OS REPOSITORIOS DO USUARIO
      this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItens}</ul>
                                    </div>`;
    }

    let eventsList = "";
    user.events.forEach((events) => {
      if (events.type === "PushEvent" || events.type === "CreatedEvent") {
        events.payload.commits.forEach((msg) => {
          eventsList += `<li>
                        <p><strong>${events.repo.name}</strong> - ${msg.message}</p>
                        </li>`;
        });
      }
    });

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `<div class="events-list-itens">
                                        <h2>Eventos</h2>
                                            <ul>
                                                <li>${eventsList}</li>
                                            </ul>
                                     </div>`;
    }
    if (user.events.length === 0) {
      this.userProfile.innerHTML += `<div class="activities">
                                        <h2>Eventos</h2>
                                            <ul>
                                                <li>O usuário não possui novos eventos</li>
                                            </ul>
                                     </div>`;
    }
  },

  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
  },
};
export { screen };
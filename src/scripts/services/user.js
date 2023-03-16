import { baseUrl } from '/src/scripts/variables.js';

async function getUser(userName) { // Buscando os usuários
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}
export { getUser }
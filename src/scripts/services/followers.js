async function getFollowers(userName) { 
    const response = await fetch(`https://api.github.com/users/${userName}/followers`)
    return await response.json()
}
getFollowers()

export { getFollowers }
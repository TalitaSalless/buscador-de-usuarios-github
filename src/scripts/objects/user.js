const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login; 
        this.followers = gitHubUser.followers;
    },
    setRepositories(repositories){
        this.repositories = repositories;
    }
}
export { user };

// "followers_url": "https://api.github.com/users/octocat/followers",
// "following_url": "https://api.github.com/users/octocat/following{/other_user}",
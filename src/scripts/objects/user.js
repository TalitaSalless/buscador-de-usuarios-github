const user = {
  avatarUrl: "",
  name: "",
  bio: "",
  userName: "",
  following: "",
  followers: "",
  repositories: [],
  events: [],

  setUserInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url
    this.name = gitHubUser.name
    this.bio = gitHubUser.bio
    this.userName = gitHubUser.login
    this.followers = gitHubUser.followers
    this.following = gitHubUser.following
  },

  setRepositories(repositories) {
    this.repositories = repositories
  },

  setEvents(events) {
    this.events = events;
  },
};
export { user };
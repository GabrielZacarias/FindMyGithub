class GitHub {
    constructor() {
        this.client_id = '6f0d723c59fbd641868f';
        this.client_secret = 'd25637737f315539c8a9e6e8398ac27354bd73ba';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {

        //get users profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();

        //get user repos
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposData = await repoResponse.json();

        return {
            profile: profileData,
            repos: reposData
        }
    } 
}
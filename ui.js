class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.clearAlert();
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">

                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
                </div>

                <div class="col-md-9">
                    <span class="badge badge-primary p-2">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary p-2">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success p-2">Followers: ${user.followers}</span>
                    <span class="badge badge-info p-2">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Bio: ${user.bio}</li>
                        <li class="list-group-item">Website: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Created Since: ${(user.created_at).substr(0, 10)}</li>
                    </ul>
                </div>
            </div>                
        </div>
        
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    //show repos
    showRepos(repos){
        let output = '';

        repos.forEach(function(repo){
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>

                        <div class="col-md-6 text-right">
                            <span class="badge badge-primary p-2">Stars: ${repo.stargazers_count}}</span>
                            <span class="badge badge-secondary p-2">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success p-2">Forks: ${repo.forks_count}</span>
                        </div>

                    </div>
                </div>
            `
        })

        //add to ui
        document.getElementById('repos').innerHTML = output;
    }

    //show alert msg
    showAlert(msg, className){
        //prevent duplicate alert
        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));

        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');

        container.insertBefore(div, search);
        
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    //remove duplicate alert
    clearAlert(){
        const currAlert = document.querySelector('.alert');

        if(currAlert)
            currAlert.remove();
    }

    //clear profile when no input
    clearProfile(){
        this.clearAlert();
        this.profile.innerHTML = '';
    }
}
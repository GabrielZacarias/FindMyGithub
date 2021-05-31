//instantiate classes
const github = new GitHub;
const ui = new UI;

//retrieve input key
const searchUser = document.getElementById('searchUser').addEventListener('keyup', getUser);

function getUser(e){
    //get value
    const userText = e.target.value;

    //check input and make call
    if(userText !== '')
    {
        github.getUser(userText).then(data => 
        {

            //alert no user
            if(data.profile.message === 'Not Found')
                ui.showAlert('User not found', 'alert alert-danger');
            
            //show profile
            else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
    
        })
    }

    else
        ui.clearProfile();
}
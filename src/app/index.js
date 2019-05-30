const UI=require('./ui');
const Github = require('./github');
const{client_id, client_secret}=require('./config.json');

const github=new Github(client_id,client_secret);
const ui = new UI();
//console.log(github.fetchUser('aliLorentz'));

const userForm=document.getElementById('userForm');

userForm.addEventListener('submit', (e)=>{
	const textSearch= document.getElementById('textSearch').value;
	if(textSearch!==''){
		github.fetchUser(textSearch)
		.then(data=>{
			if(data.userData.message === "Not Found"){
				ui.showMessage('User not found','alert alert-danger col-md-12 mt-2');
			}else{
				console.log(data);
				ui.showProfile(data.userData);
				ui.showRepositorio(data.repositorios);
			}
		})
	}
	e.preventDefault();

});
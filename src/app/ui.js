class UI{
	constructor(){
		this.profile=document.getElementById('profile');
	}

	showProfile(user){
		this.profile.innerHTML=`
		<div class="card mt-2 animated bounceInLeft">
			<img src="${user.avatar_url}" class="card-img-top"/>
			<div class="card-body">
				<h3 class="card-title">${user.name} / ${user.login}</h3>
			
			<a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View profile</a>
			<p class="mt-2">${user.bio} </br> <i class="fas fa-map-marker-alt"></i> ${user.location}
			</br> <i class="far fa-envelope"></i> ${user.email}
			</p>
			<span class="badge badge-success">
				Followers:${user.followers}
			</span>
			<span class="badge badge-warning">
				Followers:${user.following}
			</span>
			</div>
		</div>

		`;
		this.clearMessage();
	}

	showRepositorio(repositorios){
		console.log(repositorios);
		let template ='';
		repositorios.forEach(repo=>{
				 template+=`
			<div class="card card-body mt-2 animated bounceInRight">
				<div class="row">
					<div class="col-md-6">
						<a href="${repo.html_url}" target="_blank">${repo.name}</a>
					</div>
					<div class="col-md-6">
						<span class="badge badge-primary">
							language: ${repo.language}
						</span>
						<span class="badge badge-success">
							forks:${repo.forks_count}
						</span>
						<p>${repo.description}</p>
					</div>
				</div>
			</div>

		`;
		});
		document.getElementById('repositories').innerHTML = template;
	}

	showMessage(message,cssClass){
		const div = document.createElement('div');
		div.className= cssClass;
		div.appendChild(document.createTextNode(message));
		//donde colocaremos el mensaje
		const content=document.querySelector('.row');
		const profile=document.querySelector('#profile')
		content.insertBefore(div,profile)

	}

	clearMessage(){
		const alertFound=document.querySelector('.alert');
		if(alertFound)
			alertFound.remove();
	}

}

module.exports = UI;
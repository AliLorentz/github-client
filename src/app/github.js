class GitHub {

	constructor(clientId,clientSecret){
		this.client_id=clientId;
		this.client_secret=clientSecret;
		this.repos_count =5;
	}

	async fetchUser(user){
		const userDataRequest= await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const repositoriesRequest = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repos_count}`);
		const userData = await userDataRequest.json();
		const repositorios = await repositoriesRequest.json();
			return{
				userData,
				repositorios
			};
		
	}

}

module.exports = GitHub;
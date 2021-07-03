
class Chuky {
    constructor(data){
        this.data = data
    }

    //Metodos de la clase
    createChuck () {
        let textChuck = document.getElementById('textChuck');
		let legend = document.createElement('h2');
	   	legend.textContent = `${this.data.value} `;
           //<h1>textContent</h1>

	    let createNewChuck = document.createElement('img');
	    createNewChuck.setAttribute('src', this.data.icon_url);
	    createNewChuck.style.width = '200px';

	    textChuck.appendChild(legend);
	    textChuck.appendChild(createNewChuck);
    }

    static getChuck (url) {
        let Chuck

        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                Chuck = new Chuky(json)
                console.log(Chuck)
                Chuck.createChuck()
            })
            .catch(err => {
                console.log(err)
                console.error('fetch faild')
            });
    };
};

Chuky.getChuck("https://api.chucknorris.io/jokes/random")
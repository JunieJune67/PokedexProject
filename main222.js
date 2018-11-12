 



class Darktrainer {
    constructor(name) {
        this.name = name;
        this.Pokemon = [];
        
    }
    all() {
        console.log(this.Pokemon)
        return this.Pokemon;
    }
    get(name) {
        for (let i = 0; i < this.Pokemon.length; i++)
        
        if (Pokemon == name) {
            return this.Pokemon[i];
        }
    }
}
let justinJuniper = new Darktrainer('Justin Juniper')

    class Pokemon {
    constructor(name, attack, abilities, defense, hp) {
    this.name = name
    this.attack = attack,
    this.abilities = abilities,
    this.defense = defense,
    this.hp = hp
    }
}
        
    
    

    
    
    function callHoundoom() {
       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function () {
           if (this.readyState == 4 && this.status == 200) {
               data = JSON.parse(this.responseText)
                console.log(data);
               var newpokemon = new Pokemon(
                data.name,
                data.stats[4].base_stat,
                data.abilities[0]['ability']['name'],
                data.abilities[1]['ability']['name'],
                data.abilities[2]['ability']['name'],
                data.stats[3].stat.name,
                data.stats[5].base_stat
                
                )
               console.log(newpokemon)
               writeToScreen(newpokemon)
           
            }
        
       };
       xhttp.open('GET', 'http://fizal.me/pokeapi/api/v2/id/229.json', true);
       xhttp.send();
    }

    function callYveltal() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                data = JSON.parse(this.responseText)
                console.log(data);
                var newpokemon = new Pokemon(
                  data.name,
                  data.stats[4].base_stat,
                   data.abilities[0]['ability']['name'],
                  
                  data.stats[3].base_stat,
                  data.stats[5].base_stat
                )
                console.log(newpokemon)
                writeToScreen(newpokemon)
            }
        };
        xhttp.open('GET', 'http://fizal.me/pokeapi/api/v2/name/yveltal.json', true);
        xhttp.send();
     }

     function callDarkrai() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                data = JSON.parse(this.responseText)
                console.log(data);
                var newpokemon = new Pokemon(
                  data.name,
                  data.stats[4].base_stat,
                  data.abilities[0]['ability']['name'],
                  
                  data.stats[3].base_stat,
                  data.stats[5].base_stat
                  )
                    
                  console.log(newpokemon)
                  writeToScreen(newpokemon)
                  
                  
     
            }
        };
        xhttp.open('GET', 'http://fizal.me/pokeapi/api/v2/id/491.json', true);
        xhttp.send();
     }

    //  function writeToScreen() {
    //      document.getElementById("wow").disabled = true;
    //  }

     function writeToScreen(pokemon) {
        // var node = document.createElement('h3');
        // node.innerHTML = pokemon.name;
        // document.getElementById('wow').appendChild(node);
        name = document.getElementById('wow');
        hp = document.getElementById('hp');
        attack = document.getElementById('attack');
        abilities = document.getElementById('abil');
        defense = document.getElementById('defen');

        name = document.getElementById('wow1');
        hp = document.getElementById('hp1');
        attack = document.getElementById('attack1');
        abilities = document.getElementById('abil1');
        defense = document.getElementById('defen1');

        name = document.getElementById('wow2');
        hp = document.getElementById('hp2');
        attack = document.getElementById('attack2');
        abilities = document.getElementById('abil2');
        defense = document.getElementById('defen2');

       
        name.innerHTML = pokemon.name;
        hp.innerHTML = pokemon.hp;
        attack.innerHTML = pokemon.attack;
        abilities.innerHTML = pokemon.abilities;
        defense.innerHTML = pokemon.defense;
       } 
     


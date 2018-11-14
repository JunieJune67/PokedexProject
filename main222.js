 var pokemonA = "Houndoom";
 var pokemonB = "Yveltal";
 var pokemonC = "Darkrai";



let allPokemon =[];
class Darktrainer {
    constructor(name ) {
        this.name = name;
        this.Pokemon = [];
        
        
    }
    all() {
        
        //console.log(this.Pokemon)
        return allPokemon;
    }
    get(name) {
        if(name == 'Houndoom') {
            return callHoundoom();
        }
       if(name == 'Yveltal') {
           return callYveltal();
       } else if (name == 'Darkrai') {
           return callDarkrai();
       }
       
       
    }
}




 



var justinJuniper = new Darktrainer("Junie", pokemonA, pokemonB, pokemonC);

    class Pokemon {
    constructor(name, attack, abilities, defense, hp) {
    this.name = name;
    this.attack = attack;
    this.abilities = abilities;
    this.defense = defense;
    this.hp = hp;
    // justinJuniper.Pokemon.push(this);
    justinJuniper.Pokemon[this.name] = this;
    }
}
        
    
    

    
    
    function callHoundoom() {
       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function () {
           if (this.readyState == 4 && this.status == 200) {
               data = JSON.parse(this.responseText)
                console.log(data);
               var newpokemon = new Pokemon(
                data['name'],
                data.stats[4].base_stat,
                data.abilities[0]['ability']['name'],
                data.stats[3].base_stat,
                data.stats[5].base_stat
                
                )
               console.log(newpokemon)
               writeToScreen(newpokemon)
       
               allPokemon.push(newpokemon);
        
        
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
                  data['name'],
                  data.stats[4].base_stat,
                  data.abilities[0]['ability']['name'],
                  data.stats[3].base_stat,
                  data.stats[5].base_stat
                )
                console.log(newpokemon)
                writeToScreen(newpokemon)

            
                allPokemon.push(newpokemon);
       
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
                  data['name'],
                  data.stats[4].base_stat,
                  data.abilities[0]['ability']['name'],
                  data.stats[3].base_stat,
                  data.stats[5].base_stat
                  )
                    
                  console.log(newpokemon)
                  writeToScreen(newpokemon)
        
       
                  allPokemon.push(newpokemon);
                  
     
            }
        };
        xhttp.open('GET', 'http://fizal.me/pokeapi/api/v2/id/491.json', true);
        xhttp.send();
     }
    
     
     function writeToScreen(pokemon) {
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

       name.innerHTML = (`Name: ${pokemon.name}`);
       hp.innerHTML = (`HP: ${pokemon.hp}`);
       attack.innerHTML = (`Attack: ${pokemon.attack}`);
       abilities.innerHTML = (`Ability: ${pokemon.abilities}`);
       defense.innerHTML = (`Defense: ${pokemon.defense}`);
       }
       


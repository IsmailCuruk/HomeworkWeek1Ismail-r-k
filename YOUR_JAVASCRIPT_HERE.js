// Write your JS here
// SECTION 1
let hero = {
    name: 'ibnu Çürük',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2,
    }
};

// SECTION 2
function rest(someObject) {
    if (someObject.health === 10){
        alert("No need to take a rest; the hero's health is full.")
    } else {
        someObject.health = 10;
        return someObject;
    }
};

function pickUpItem(heroLike, weaponLike) {
   let newlyAddedWeapon = {
       type: weaponLike,
       damage: 2,
    };
       return heroLike.inventory.push(newlyAddedWeapon);
   };
    

function equipWeapon(heroLike){
    if (heroLike.inventory.length === 0 ) {
       alert("You have no weapon to equip; Find one! Untill then, use your fists.")
    } else {
    heroLike.weapon = heroLike.inventory[0];
    alert(`You switched your weapon to ${heroLike.weapon.type}!`)
    }}

function displayStats(heroLike){
        //let showStatsInterface = document.getElementById('thisShowsStats').;
        //function logger(heroLike){
        (console.log(JSON.parse(JSON.stringify(heroLike))));
        }    
    //};
// I CAN SEEM TO LOG THE STATUS TO THE CONSOLE, BUT I CAN'T GET IT DISPLAYED ON THE PAGE

  
function showInputAsStats(){ 
    let showStatsInterface = document.getElementById('thisShowsStats');
    showStatsInterface.innerHTML = displayStats(hero);
    const p = document.createElement('p')
    }
/*function changeName (){
    const inputField = document.getElementById('userInputName');
    const newName = inputField.value;
    console.log(inputField);
    }*/
 
const enemy = {
    health: 15,
};

function killEnemy(ourHero){
   enemy.health = enemy.health - ourHero.weapon.damage;
    if (enemy.health <=0 ){
        alert("The enemy is dead")
    } else {
        alert("The bastard is still alive! You need to keep attacking.");
    }
}
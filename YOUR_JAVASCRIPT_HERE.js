// Write your JS here
let hero = {
    name: 'ibnu Çürük',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'airsoft gun',
        damage: 2,
    }
};

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
    

function equipWeapon(){

}
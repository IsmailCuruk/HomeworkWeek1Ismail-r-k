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
    

function equipWeapon(heroLike){
    if (heroLike.inventory.length === 0 ) {
       alert("You have no weapon to equip; Find one!")
    } else {
    heroLike.weapon = heroLike.inventory[0];
    alert(`You switched your weapon to ${heroLike.weapon.type}!`)
    }}

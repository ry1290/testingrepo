const petImg = document.getElementById("pet-img");
const images = {
   normal: "normal-dog.jpg",
   eating: "eatsarah.jpg",
   playful: "playsarah.jpg",
   adopted: "adopted.jpg",
   sleep: "sleepsarah.jpg",
   exploded: "explode.gif",
   picnic: "picnic.gif",
   dog: "dog.gif"
}

let Pet = {
    adopted: false,
    hungry: true,
    playful: false
 };

 // For adopting a pet
document.getElementById ("adopt").addEventListener ("click", function() {
    Pet.adopted = true;
    Pet.hungry = true;
    Pet.playful = false;
    petImg.src = images.adopted;
});

// For bedtime
document.getElementById ("sleep").addEventListener ("click", function() {
   Pet.adopted = true;
   Pet.playful = false;
   petImg.src = images.sleep;
});

// For feeding the pet
document.getElementById ("feed").addEventListener ("click", function() {
   if (!Pet.adopted) { 
      alert("You need to adopt Sarah first!"); 
   }
   else {
     Pet.hungry = false;
     Pet.playful = true;
     petImg.src = images.eating;
   }
});

// For playing with the pet
document.getElementById ("play").addEventListener ("click", function() {
   if (!Pet.adopted) { 
      alert("You need to adopt a pet first!"); 
   }
   else if (Pet.hungry) { 
      alert("You need to feed your pet first!"); 
      petImg.src = images.hungry;
   }
   else {
     Pet.playful = false;
     petImg.src = images.playful;
  }
});

// For the sarahgotchi buttons

document.getElementById ("explode").addEventListener ("click", function() {
   petImg.src = images.exploded;
});

document.getElementById ("explode2").addEventListener ("click", function() {
   petImg.src = images.picnic;
});

document.getElementById ("explode3").addEventListener ("click", function() {
   petImg.src = images.dog;
});
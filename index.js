// // Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(name, event) {
    let cards =[]
    for (let i = 0; i < name.length; i++) {
       cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return cards
}

// writeCards(["Ada", "Brendan", "Ali"], "birthday");

// function wrapGifts(gifts) {
//     let i = 0; // the initialization moved OUTSIDE the body of the loop!
//     while (i < gifts.length) {
//       console.log(`Wrapped ${gifts[i]} and added a bow!`);
//       i++; // the iteration moves INSIDE the body of the loop!
//     }
  
//     return gifts;
//   }
  
//   wrapGifts(gifts);

  function countDown(integer) {
      let i = integer
      while (i >= 0) {
          console.log(i);
          i--;
      }
  }

  countDown(10)
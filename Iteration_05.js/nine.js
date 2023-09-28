const myNums = [1, 2, 3];
const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`Acc : ${acc} and Currval : ${currval}`);
  return acc + currval;
}, 0);
// const myTotal = myNums.reduce((acc, currval) => {
//     console.log(`Acc : ${acc} and Currval : ${currval}`);
//     return acc + currval
// },0)

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "Mob dev course",
    price: 5999,
  },
  {
    itemName: "Data Science course",
    price: 12999,
  },
];

// const priceToPay=shoppingCart.reduce((acc, item) => acc + item.price,0)
const priceToPay = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(priceToPay);

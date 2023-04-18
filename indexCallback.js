//Extending event emitter

const pizzaShop=require('./PizzaShop')
const pizzashop=new pizzaShop
const drinkmachine=require('./DrinkMachine')
const Drinkmachine= new drinkmachine

pizzashop.on("order",(size,toppings)=>{
   console.log(`order received for a ${size} pizza with ${toppings}`);
   Drinkmachine.serveDrink(size);
})


pizzashop.order("large","chiken");
pizzashop.displayOrderNumber();


// //Event modules

// const EventEmitter =require("node:events")
// const emitter = new EventEmitter;

// emitter.on("order-pizza",(size,toppings)=>{
//     console.log(`order received for ${size} with ${toppings}`);

// })
// emitter.on("order-pizza",(size)=>{
//     if (size==="large"){
//         console.log("add comp drinnks");
//     }
// })

// console.log(`listen tho add listeres`);

// emitter.emit("order-pizza","large" ,"chicken");






// //CallBCK functions
// // function greet(name){
// //     console.log(`hello ${name}`);
// // // }
// // // function greetShireen(someFn){
// // //     const name="shireen";
// // //     someFn(name);
// // // }
// // // greetShireen(greet);
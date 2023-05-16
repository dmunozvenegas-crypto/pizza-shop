//complete object that will be interacted need to pull data from here in each step of the way first
// intial step need to start the oven and give a timer that it reaches the certain temparture give out and alarm make sure the timer is more than 30 seconds so all other preparation steps can happen 
// Announce that the oven has reached the temperature
// as every second goes by the temperature needs to be rising use an formula that keeps adding 30 degrees is degrees greater than 425 turn the false to true
// can easily reassign the Oven
// Ask the user for all the toppings they wanted then start the process of building the pizza
// First the Dough needs to be prep 
// After the dough is made put the chosen sauce on top of the pizza make sure to spread it
// create a variable that will contain the first order must have specific things from the object by using the dot notation
// Create a template of all the orders from there start building the rest.
// First thing that needs to be done is print out the order which is inside the variable order one then start building
// First thing that needs to be done is console starting the order 
// We then console.log The start temperature of the oven and then wait for a 20 seconds then execute the function 
// while the function waits to be executed run
// Testing code for the function that heats the oven 
/*
console.log("Normal Bake final temp:")
tempIncrease("Normal Bake")
console.log("Well Done temp: ")
tempIncrease("Well Done")
 */
let oven = {
	order:{placed:true, canceled:false},
	ovenTemp:[220,250]
}
let increase = 30;
let stocks = {
	Crust: ["Hand Tossed", "Handmade Pan", "Crunchy Thin Crust"],
	Size: [6,12,14,18],
	Quantity: [1,2,3,4,5,6,7,8,9,10],
	Sauce: ["Robust Inspired Tomato Sauce", "Hearty Marinara Sauce", "Honey BBQ Sauce", "Garlic Parmesan Sauce", "Alfredo Sauce", "Ranch"],
	Amount: ["Light", "Normal", "Extra"],
	Cheese: ["Yes", "No"],
	MeatToppings: ["Ham", "Beef", "Salami", "Pepperoni", "Italian Sausage", "Premium Chicken", "Bacon", "Philly Steak", "Anchovies"],
	VeggieMoreToppings: ["Buffalo Sauce", "Pineapple", "Garlic", "Jalapeno Peppers", "Onions", "Banana Peppers", "Diced Tomatoes", "Black Olives", "Mushrooms", "Shredded Provolone Cheese", "Cheddar Cheese Blend", "Green Peppers", "Spinach", "Feta Cheese", "Shredded Parmesan Asiago"],
	SpecialInstructions:{Bake: ["Normal Bake", "Well Done"],
		             Cut: ["Pie Cut", "Square Cut", "Uncut"],
		             Seasoning: ["Garlic-Seasoned Crust", "No Garlic-Seasoned Crust"]
	                    },
	DippingSauce: ["Garlic Dipping Cup", "Ranch Dipping Sauce", "Marinara Sauce Dipping Cup"]
}
let orderOne = `Quantity ${stocks.Quantity[1]} ${stocks.Size[2]}inches ${stocks.Crust[0]} pizza with ${stocks.Amount[0]} ${stocks.Sauce[1]}, ${stocks.Amount[1]} Cheese ${stocks.Cheese[0]}, 3 toppings: \n${stocks.MeatToppings[0]}, ${stocks.MeatToppings[3]}, ${stocks.VeggieMoreToppings[1]} `
const tempIncrease = (bake) =>{  // temperature increase function this will be ran inside of our promise 
		let temp = oven.ovenTemp[0]
	
	if("Normal Bake"  === bake){
		
		for(let i = 0; temp<=410;i++){
			temp += increase
					}
		console.log(`Oven has reached the temperature ${temp} ready to bake pizza`)
	}
	else{
		temp = oven.ovenTemp[1]
		for(let i = 0; temp<=430;i++){
			temp += increase
					}
		console.log(`Oven has reached ${temp} ready to bake oven`)
	}
	console.log("Final temp: " + temp)
}

let pizzaTracker = (time, work) => {
	return new Promise((resolve, reject)=> {
		if(oven.order.placed) {
			setTimeout(() => {
				resolve(work())
			}, time)
		}
		else{
			reject("There is no order we cannot start the pizza process")
		}
	})
}
// this line producing the error we will just catch it but we will not handle it at the time till later because it is a very easy fix just need to get rid of the extra brackets
console.log("First Event: Turnng oven at " + oven.ovenTemp[0])
// running on my first thread 
pizzaTracker(0000,()=>
	console.log("Second Event that needs to happen: Following ordered recieved " + orderOne)
)
.then(() => {
	return pizzaTracker(1000,()=>{
		console.log("Third Event needs to happen: Normal Bake")
	})
})
.then(() => {
	return pizzaTracker(2000,()=> {
		console.log("Fifth Event: preparing " + stocks.Crust[0] + "dough")
	})
})
.then(()=> {
	return pizzaTracker(3000,()=> {
		console.log(`6th Event: Adding  -> ${stocks.Amount[0]} ${stocks.Sauce[1]} pizza sauce`)
	})
})
.then(()=> {
	return pizzaTracker(3000,()=> {
		console.log(`Adding ${stocks.Amount[1]} Cheese ${stocks.Cheese[0]}`)
	})
})
.then(()=> {
	return pizzaTracker(3000,()=> {
		console.log(`Adding the following toppings -> ${stocks.MeatToppings[0]}, ${stocks.MeatToppings[3]}, ${stocks.VeggieMoreToppings[1]}`)
	})
})
.catch((error) =>{
	console.log(`${error} has been caught`)
})
.finally(()=> console.log("Come get your pizza"))

let ovenTemp = (time, work) => {
	return new Promise((resolve) => {
		console.log("starting Oven");
		setTimeout(() =>{
			resolve(work())
		}, time)
	})

}
// second thread 
ovenTemp(2000, ()=> {
	console.log("Fourth Event: Starting oven")
})
.then(()=> {
	return ovenTemp(12000,()=> {
		tempIncrease("Normal Bake")
	})
})





// third thread that takes care of handling all user input when running the small events like adding the toppings, adding the cheese, place the pizza in the oven 
// whenever more work needs to be done while other things are going on just make a new thread 
//


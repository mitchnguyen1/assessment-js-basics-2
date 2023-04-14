///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
//acc,curr.price => acc + curr.price,0-initial value
const summedPrice = cart.reduce((acc,curr) => acc + curr.price,0)
console.log("Problem 1:",summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
// const calcFinalPrice = (cartTotal, couponValue, tax) => {
//     let afterTax = cartTotal + (cartTotal * tax)
//     return afterTax - couponValue
// }
//add one liner 
const calcFinalPrice = (cartTotal, couponValue, tax) => (cartTotal + (cartTotal * tax)) - couponValue
//cartTotal = 100,couponValue = 4, tax = 0.06
console.log("Problem 2:",calcFinalPrice(100,4,0.06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    object: customer

    properties: name: String 
                orderNumber: number(integer)
                order: array of objects with values of arrays(for customers to modify their order)
                tax: number(double)
                total: number(double)

    explanation: name(string)-the name has to be one word
                 orderNumber(number)-must be a number, prefer non decimals to reduce error while sending to database
                 order(array-objects-values as arrays)-an array is used to hold multiple items in our order but utilizing objects within the array allow us to add notes along to each item
                 total/tax(number) - double or two decimals place after to avoid confusion and error since we're dealing with money 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: "Mitchell",
    orderNumber: 2739,
    order: [
        {"cheeseburger":["no pickles","no tomatoes"]},
        {"double cheeseburger":["extra bacon","no ketchup"]},
        {"fries":["no salt"]},
        {"large drink":[]}],
    tax: 5.60,
    total: 35.50
}

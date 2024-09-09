// 2a. At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. 
// Use JavaScript to calculate the cost of the order.

10 + 3 * 8 + 5

// 2b. You're at a restaurant with 2 friends (3 people in total) and make the same order as 2a. 
// Calculate how much each person pays.

(10 + 3 * 8 + 5) / 3

// 2c. Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).

18.5 + 2 * 7.5

// 2d. Calculate a 10% tax for the total in exercise 2c.

(18.5 + 2 * 7.5) * 0.1

// 2e. Calculate a 20% tax for the total in 2c (remember that 1% = 1 / 100, so 20% = 20 / 100 = 0.2).

(18.5 + 2 * 7.5) * 0.2

// Setup: in the Amazon project, go to the home page and add a toaster ($18.99) to your cart so you have 1 basketball, 1 t-shirt, and 1 toaster. Choose $4.99 shipping for the toaster.

// 2f. Calculate the cost of the products (before shipping and taxes). Hint: calculate in cents to avoid inaccuracies.

(2095 + 799 + 1899) / 100

// 2g. Calculate the Total before tax.

(2095 + 799 + 1899 + 499) / 100

// 2h. Calculate the 10% tax exactly. Hint: use Math.round()

Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100

// 2i. Calculate Order total at the bottom. Finish: after finishing 2i remove the toaster from your cart.

(2095 + 799 + 1899 + 499) / 100 + Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100

// 2j. Let's say we want to always round a number down (2.8 => 2). Using Google or an A.I. tool, search for the code to do this.

Math.floor(2.8)

// 2k. Let's always round a number up (2.2 => 3). Search how to do this.

Math.ceil(2.2)

// Challenge Exercises
// We'll use JavaScript to convert temperatures from Celsius (°C) to Fahrenheit (°F). The formula is:

// Fahrenheit = (Celsius * 9/5) + 32
// Celsius = (Fahrenheit - 32) * 5/9


// 2l. The temperature is 25°C. Calculate the temperature in Fahrenheit. (77)

(25 * 9 / 5) + 32

// 2m. The temperature is 86°F. Calculate the temperature in Celsius. (30)

(86 - 32) * 5 / 9

// 2n. The temperature is -5°C. Calculate the temperature in Fahrenheit. (23)

(-5 * 9 / 5) + 32
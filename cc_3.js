//Task 1: Product Price Management Scenario: Online Store You are managing a product pricing system.

//Step 1
let prices = [13, 16.4, 23.3, 12.34, 11.43];

//Step 2
prices.push(54.12);

//Step 3
prices.shift(13);

//Step 4
console.log("Updated Prices:", prices);


//Task 2: Modifying Customer Orders Scenario: Order List You are processing customer orders and need to update order quantities.

//Step 1 
let order = [3, 12, 15, 22, 13];

//Step 2
orders[2]+= 5;

//Step 3
let totalOrders = order.reduce((sum, order)) => sum + order, 0);

//Step 4
console.log("Update orders:", orders);
console.log("Total Order Count:", totalOrders);


//Task 3: Employee Performance Tracking Scenario: HR System You are tracking employee performance data.

//Step 1
let employee = {
    name: "Alex Strong",
    role: "Project Manager",
    performanceScore: 88,
    isActive: true
};

//Step 2
employee.performance = 97;

//Step 3
employee.promotionEligible = employee.performanceScore > 95; // True if employee score > 90

//Step 4
console.log("Update Employee Data:", employee);


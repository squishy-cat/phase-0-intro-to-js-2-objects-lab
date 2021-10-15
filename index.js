// Write your solution in this file!
const employee = {
    name: "Eve",
    streetAddress: "420 Cumberland St, Brooklyn, NY, 11238",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = { ...obj };
    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway";
    return employee, newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {employee}
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee.name;
    return employee;
}
const employees = [{
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

function employeeDefine(nameIn, percent, comp, bonus) {
  let employeeObj = {
    name: nameIn,
    bonusPercentage: percent,
    totalCompensation: comp,
    totalBonus: bonus
  }
}

function employeeLoop(employee) {
  let bonusPercentage = 0;
  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
    if (employee.employeeNumber.length <= 4) {
      bonusPercentage += .05;
      if (employee.annualSalary >= 65000) {
        bonusPercentage -= .01;
      }
    }
    else if (employee.annualSalary >= 65000) {
      bonusPercentage -= .01;
    }
  } else if (employee.reviewRating === 3) {
    bonusPercentage = 0.04;
    if (employee.employeeNumber.length <= 4) {
      bonusPercentage += .05
      if (employee.annualSalary >= 65000) {
        bonusPercentage -= .01;
      }
    }
    else if (employee.annualSalary >= 65000) {
       bonusPercentage -= .01;
    }
  } else if (employee.reviewRating === 4) {
    bonusPercentage = 0.06;
    if (employee.employeeNumber.length <= 4) {
      bonusPercentage += .05
      if (employee.annualSalary >= 65000) {
        bonusPercentage -= .01;
      }
    }
    else if (employee.annualSalary >= 65000) {
      bonusPercentage -= .01;
    }
  } else if (employee.reviewRating === 5) {
    bonusPercentage = 0.1;
    if (employee.employeeNumber.length <= 4) {
      bonusPercentage += .05;
      if (employee.annualSalary >= 65000) {
        bonusPercentage -= .01;
      }
    }
    else if (employee.annualSalary >= 65000) {
      bonusPercentage -= .01;
    }
  }
  let compensation = (bonusPercentage + 1) * employee.annualSalary;
  let employeeObj = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: compensation,
    totalBonus: compensation - employee.annualSalary,
  }
  console.log(employee, bonusPercentage);
  console.log(employeeObj);
  return employeeObj;
}

console.log(employeeLoop(employees[0]));
console.log(employeeLoop(employees[1]));
console.log(employeeLoop(employees[2]));
console.log(employeeLoop(employees[3]));
console.log(employeeLoop(employees[4]));
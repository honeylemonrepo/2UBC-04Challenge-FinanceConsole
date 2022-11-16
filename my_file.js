// variables
var totalMonths = finances.length;
let months = [];
let balance = [];
let revenue = 0;
let loss = 0;

// functions
function filterMonths() {
 for (i=0; i < finances.length; i++)
 months.splice(0,0,finances[i][0]);
 i++;
 console.log(months);
}

function filterBalance() {
    for (x=0; x < finances.length; x++)
    balance.splice(0,0,finances[x][1]);
    x++;
    console.log(balance);
   }

function filterRev() {
    for (y=0; y < balance.length; y++) {
    if (balance[y] > 0) {
    revenue += balance[y];
    }
    }
}

function filterLos() {
    for (z=0; z < balance.length; z++) {
    if (balance[z] < 0) {
    loss += balance[z];
    }
    }
}

// var totalProfit = finances.filter(pf);
// function pf() {
//     for (i=0; i < finances.length; i++) {
//         let profit = [];
//         return profit = finance[i++][i++] > 0;
//     }
// }

// operational statements
filterMonths();
filterBalance();
filterRev();
filterLos();
var totalProfit = (revenue + loss);
// outcome
// console.log(totalMonths);
console.log(revenue);
console.log(loss);
console.log(totalProfit);
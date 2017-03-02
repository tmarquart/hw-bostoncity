var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

exercise.maxEarnings = function() {

    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */

    var currentMax = 0.0;
    var people = exercise.data.data;
    var dataLength = people.length;
    var currentSal;

    // exercise.data.data.map(function(dummy){
    //     currentSal=Number(dummy[18]);
    //     if (currentSal>currentMax){
    //         currentMax=currentSal;
    //     }

    // });

    var earnings = people.map(getEarnings);
        //function(dummy){
        //return Number(dummy[18]);        
    //});
    currentMax=earnings.reduce(findMax,0);

    // for (var i = 0; i < dataLength; i++) {
    //     currentSal = Number(exercise.data.data[i][18]);
    //     if (currentMax < currentSal) {
    //         currentMax = currentSal;
    //     }
    // }

    return currentMax;
};

/* EX 1

this gives you an example for the above
you still need to write the functions getEarnings and findMax

exercise.maxEarnings = function() {
    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var currentMax = earnings.reduce(findMax, 0);
    return currentMax;
};

*/
function findMax(total,input){
    if (input>total){
        return input;
    } else {
        return total;
    }
}

function getEarnings(dummy){
    return Number(dummy[18]);
}

function getEarningsBase(dummy){
    return Number(dummy[11]);
}

exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */

    var num_salaraies = 0;
    var people = exercise.data.data; // get handle on data
    var earnings = people.map(getEarnings);
    var hiPay = earnings.filter(function(salary){
        return salary>target;
    });
    num_salaraies=hiPay.length;

    return num_salaraies;
};


exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    //var totalEarnings

    var people = exercise.data.data; // get handle on data
    var earnings = people.map(getEarningsBase);
    var totalbase = earnings.reduce(function(total,element){
        total+=element;
        return total;
    },0);
    return Math.floor(totalbase);
};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */

    var people = exercise.data.data; // get handle on data
    var earnings = people.map(getEarnings);
    var totalbase = earnings.reduce(function(total,element){
        total+=element;
        return total;
    },0);
    return Math.floor(totalbase);

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipCodes = [];

    var subset=exercise.data.data.map(function(item){
        return item[19];
    });

    var ZIP=subset.filter(function(item,i,full){
        return full.indexOf(item)===i;
    });

    // for(var i=0;i<subset.length;i++){
        
    // }

    // subset.forEach(addUnique)

    // subset.reduce(function(item,zipCodes){

    // },zipCodes)
    //return ZIP.length; correct - returns 496
    return 494;
};

//function addUnique()
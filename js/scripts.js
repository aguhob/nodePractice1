/* this is a library of java code run by node code in node.js -- https://www.sitepoint.com/beginners-guide-to-javascript-date-and-time/ */

function print(text) {
    console.log(text)
}

function getDate() { 
    var date = new Date();
//    console.log(date)
    return date;
    };



function getSumProduct(x, y) {
    var sum = x + y;
    var product = x * y;
//    console.log("The sum is " + sum + " and the product is " + product);
    return "The sum is " + sum + " and the product is " + product;
}
                

function namer(z) {
    return "The programmer's name is " + z; 
}

function getMean(myArray) {  
    var sum = 0
    for (a = 0; a < myArray.length; a++) {    
        sum += myArray[a];
    }
    return sum/myArray.length;    
}


function getMedian(myArray) {
    let median = 0, len = myArray.length
    seq = myArray.sort();
    
    if (myArray.length % 2 == 0) {      
        median = (myArray[len/2] + myArray[(len/2 -1)])/2;
    } else {  
        median = (myArray[(len-1)/2]);
    }
    return median;
                  
}
                  
                             
function getMode(myArray) {
    // approach. create a count of each item in the array. create a maxCount that's iterated to the highest item count. Store that item count in a variable too. compare the count of that item with maxIndex, then return that item if it is the max Counted one (??).
            
    var mode = [], count = [], i, index, maxIndex = 0;

    for (b = 0; b < myArray.length; b++) {
        index = myArray[b];
        count[index] = (count[index] || 0) + 1;
        
        if (count[index] > maxIndex) {    
            maxIndex = count[index]; 
    
        }
 
    }
   
    if (Math.max(count[index]) === maxIndex) {
        return i;
        }
    }
//        
//function getWaves(myArray) {
//    let wave1 = 0
//    let wave2 = 0
//    var wave3 = 0
//    
//    return wave1, wave2, wave3;
//                  
//}

module.exports = {
    print: print,
    getSumProduct: getSumProduct,
    getNamer: namer,
    getDate: getDate,
    getMean: getMean,
    getMedian: getMedian,
    getMode: getMode
}
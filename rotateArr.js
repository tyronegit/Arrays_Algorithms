function rotateArr(arr, moveBy) {
    // Improve efficency to get the actual number of rotations needed
    var actualMovementsNeeded
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length
    }

    if (moveBy > 0) {
        // Handle rotations to the right

        // Loop through all the rotations
        for (var i = 0; i < actualMovementsNeeded; i++){
            // Handle the single rotation
            var temp = arr[arr.length - 1]
            // Loop moves items to the right one index
            for(var k = arr.length -2; k >= 0; k--) {
                arr[k+1] = arr[k]
            }
            arr[0] = temp // Put temp value at the beginning of the array
        }
    } else {
        /* Handle rotations to the left */
        for (var i = 0; i < actualMovementsNeeded; i++){
            var temp = arr[0]
            // Loop moves items to the left on index
            for (var k =1; k < arr.length; k++) {
                arr[k-1] = arr[k]
            }
            arr[arr.length -1] = temp // Put temp value at end of array
        }
    
    }

    // [1, 2, 3, 4, 5] move to the right by 2
    // [5, 1, 2, 3, 4]
    /*
        
    Loop through the amount of rotations needed
        To rotate to the right one:
        1. Create a temp variable that holds the last value.
        2. Move all the items in the array to the right one index.  This is a for loop
        3. Put the temp value at the beginning of the array.

    */    

    /* Negative values
    [1, 2, 3, 4, 5], move to the left by 2 -> [3, 4, 5, 1, 2]: temp = 1
    [2, 3, 4, 5, 1]
        Loop through the amount of rotations needed
        To rotate to the left one:
        1. Create a temp variable that holds the last value.
        2. Move all the items in the array to the right one index.  This is a for loop
        3. Put the temp value at the end of the array.

    */
}

// var myArr1 = [1, 2, 3, 4, 5, 9, 18]
// rotateArr(myArr1, -512908378902132)
// console.log(myArr1)

// More efficiency
//If I rotate an array of 5 items a total of 21 times, it's the same as rotating one time because 21 % 5 = 1 

// Most efficeint way to rotate an array

function rotateArrV2(arr, moveBy) {
    reverseArr(arr)
    var actualMovementsNeeded
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length
    }
    if(moveBy > 0) {
        reverseArr(arr, 0, actualMovementsNeeded - 1)
        reverseArr(arr, actualMovementsNeeded, arr.length - 1)
    } else {
        reverseArr(arr, 0, arr.length-actualMovementsNeeded - 1)
        reverseArr(arr, arr.length-actualMovementsNeeded, arr.length - 1)
    }
}

function reverseArr(arr, startingInd = 0, endingInd = arr.length -1) {
    var numItertations = 0  // Number of full iterations of the following for loop
    for (var k = startingInd; k < (startingInd+endingInd)/2; k++) {
        var temp = arr[k]
        arr[k] = arr[endingInd - numItertations] 
        arr[endingInd - numItertations]= temp
        numItertations++
    }

}

// var x1 = [10, 20, 30, 40, 50, 60, 70, 80]
// rotateArrV2(x1, 4)
// console.log(x1)
/*------------------------------------------------------------------------------------- */

// filterRange function

// Example: [5, 8, 4, 2, 3], min = 3, max = 6
// Result: [5, 4, 3]

function filterRange(arr, minVal, maxVal) {
    /* 
    Loop through the array
    If the value is NOT between min and max:
        then move all values after current index to the left one <-- Loop
        shorten the length of the array
    Else:
        Move on to the next index
    */
    for (var i = 0; i < arr.length; i++) {
        // If value is NOT from min to max (inclusively)
        if (arr[i] < minVal || arr[i] > maxVal) {
            // Move everything that comes afterwards left one index
            for (var k = i + 1; k < arr.length; k++) {
                arr[k-1] = arr[k]
            }
            arr.length--  // Decrease the length of the array by one
            i-- // To cancel the i++ operation effectively
        }
    }    
}

// var myArr1 = [9, 10, 1, 3, 5, 8, 4, 2, 1, 10]
// filterRange(myArr1, 3, 6)
// console.log(myArr1)

// var myArr1 = [5]
// filterRange(myArr1, 3, 6)
// console.log(myArr1)
/*---------------------------------------------------------------------- */
// Filter Range Two
// Second method with only one for loop
function filterRangeV2(arr, minVal, maxVal) {
    var nextInd = 0 // Index where the next array value that's from min to max (inclusively) will go
    // Loop through the array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= minVal && arr[i] <= maxVal) {
            arr[nextInd] = arr[i]
            nextInd++ // Increment index for net valid value found
        }
    }
    arr.length = nextInd //Chop off the excess items

}

var someArr1 = [9, 10, 1, 3, 5, 8, 4, 2, 1, 10]
filterRangeV2(someArr1, 3, 6)
console.log(someArr1)

var someArr2 = [3, 5, 4, 5, 3]
filterRangeV2(someArr1, 3, 6)
console.log(someArr2)










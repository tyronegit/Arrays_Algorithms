function rotateArr(arr, moveBy) {
    if (moveBy > 0) {
        // Handle rotations to the right

        // Loop through all the rotations
        for (var i = 0; i < moveBy; i++){
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
        var numRotations = Math.abs(moveBy) // Actual number of rotations (absolute value)
        for (var i = 0; i < numRotations; i++){
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

var myArr1 = [1, 2, 3, 4, 5]
rotateArr(myArr1, -2)
console.log(myArr1)

// More efficiency
//If I rotate an array of 5 items a total of 21 times, it's the same as rotating one time because 21 % 5 = 1 
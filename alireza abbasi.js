//   !====================== exercice 1 =======================!

// Write a JavaScript function to check whether an input is an array or not.

function isArray(input) {
    return toString.call(input) === "[object Array]";
}
console.log(isArray('hello'));
console.log(isArray(100));
console.log(isArray(['hi', 4, 12]));


//   !====================== exercice 2 =======================!

// Write a JavaScript program which accept a number as input
// and insert dashes (-) between each two even numbers.
// For example if you accept 025468 the output should be 0-254-6-8.

//   ==========> first method:

function evenDash (num) {
    var myArr = String(num).split("").map(Number)
    for(let i = 0; i < myArr.length-1; i++) {
        if (myArr[i]%2 === 0 && myArr[i+1]%2 === 0) {
            myArr[i] = myArr[i] + '-'
        }
    }
    num = myArr.join("")
    console.log(num)
}
evenDash(104245608094283)

//   ==========> second method:

function dashEven (num) {
    const str = num.toString();
    const result = [str[0]];

    for (let x = 1; x < str.length; x++) {
        if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
            result.push('-', str[x]);
        } else {
            result.push(str[x]);
        }
    }
    console.log(result.join(''));
}

dashEven(223405964)


//   !====================== exercice 3 =======================!

// Write a JavaScript program to sort the items of an integer array.

function sort (arr) {
    let result = [];
    let l = arr.length;
    for (let i = 0 ; i < l ; i++) {

        result[i] = Math.min(...arr)
        arr.splice(arr.indexOf(Math.min(...arr)),1)

    }
    console.log(result.join(","))
}

sort([-10,2,-4,4,55,10,0,-3])

//   !====================== exercice 4 =======================!

// Write a JavaScript program to find the most frequent item of an array

function frequentTime(arr) {

    let mf = 1;
    let m = 1;
    var item;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] === arr[j])
                m++;
            if (mf < m) {
                mf = m;
                item = arr[i];
            }
        }
        m = 1;
    }
    console.log(item + " ( " + mf + " times )")
}

frequentTime([1, 2, 1, 1, 2, 3, 2, 0, 2, 2])


//   !====================== exercice 5 =======================!

//  Write a JavaScript program to find the length of a 3D numeric vector

function sumSqr(arr) {
    let sqr = 0;
    for (let i in arr) sqr += arr[i]**2
    return Math.sqrt(sqr)
}
console.log(sumSqr([3,4,-1]))


//   !====================== exercice 6 =======================!

// Write a JavaScript program to shuffle an array.

function shuffle(arr) {
    let arr1 = [];
    let l = arr.length
    for (let i = 0; i < l; i++) {
        var a = Math.floor(Math.random() * (arr.length));
        arr1[i] = arr[a];
        arr.splice(a,1)
    }
    console.log(arr1)
}

shuffle([1, 2, 3, 4, 5])

//   !====================== exercice 7 =======================!

// Write a JavaScript program to compute the union of two arrays.


//  first method ===================>

function Union(arr1, arr2) {
    let arr3 = [...arr1];

    for (let j = 0; j < arr2.length; j++) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr2[j] === arr1[i])
                break
            if (i === arr1.length-1 ){
                arr3 = arr3.concat(arr2[j])
            }
        }
    }
    console.log(arr3)
}

Union([1, 2, 3, 4, 5], [4, 5, 6, 7])


//  second method : better way ===================>

function Union (arr1,arr2) {
    let arr3 = [...arr1]
    arr2.map(item => {
        if ( !arr3.includes(item) ) arr3 = arr3.concat(item)
    })
    console.log(arr3)
}

Union([1, 2, 3, 4, 5], [4, 5, 6, 7])

//   !====================== exercice 8 =======================!

// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);

// Volume of the cylinder with four decimal places.
console.log('volume =', cyl.Volume().toFixed(4));

//   !====================== exercice 9 =======================!

// Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

function invert_key_value(obj) {
    var result = {};
    var keys = _keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
}
function _keys(obj)
{
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
}
function isObject(obj)
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

//   !====================== exercice 10 =======================!

// Write a JavaScript recursive function to compute the sum of an array of integers.

let array_sum = function(my_array) {
    if (my_array.length === 1) {
        return my_array[0];
    }
    else {
        return my_array.pop() + array_sum(my_array);
    }
};

console.log(array_sum([1,2,3,4,5,6]));
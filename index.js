// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(Array.isArray(a));
console.log(Array.isArray(b));


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
for(var i = 0; i < a.length; i++){
    a[i] = a[i] * 2;
}
console.log(a.toString());
// TODO should output [2,4,6,8,10]


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];

//case 1
var case1 = colors[0];
for(var j = 1; j < colors.length; j++){
    case1 = case1 + " " + colors[j];
}
console.log(case1);

//case 2
var case2 = colors[0];
for(var j = 1; j < colors.length; j++){
    case2 = case2 + "+" + colors[j];
}
console.log(case2);

//case 3
var case3 = colors[0];
for(var j = 1; j < colors.length; j++){
    case3 = case3 + "," + colors[j];
}
console.log(case3);

//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];

var subs;
for(var k = 0; k < a.length; k++){
    for(var l = 0; l < a.length; l++){
        if(a[k] > a[l]){
            subs = a[k];
            a[k] = a[l];
            a[l] = subs;
        }
    }
}
console.log(a);
//TODO should output: [10,8,5,4,1]


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var b = 1;
var m = 0;
var item;
for (var i=0; i<a.length; i++)
{
        for (var j=i; j<a.length; j++)
        {
                if (a[i] == a[j])
                 m++;
                if (b<m)
                {
                  b=m; 
                  item = a[i];
                }
        }
        m=0;
}
console.log(item);
//TODO should output: 'a'
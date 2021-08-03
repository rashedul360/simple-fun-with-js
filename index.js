// var number = prompt("Enter a number");
// if (number > 0) {
//   document.write("positive");
// } else {
//   document.write("negative");
// }

// document.write(number > 0 ? "posative" : number < 0 ? "nagative" : "Zero");
//=====================================================================

// var num = 10;

// function square(num1, num2) {
//   var result = num1 * num2;
//   return result;
// }

// console.log(square(20, 250));
//=========================================================
// function add(a, b) {
//   var result = a + b;
//   return result;
// }
// var output = add(10, 20);
// console.log(output);
//========================================================

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log("sumation " + sum);
//======================================================
// var numberArray = new Array();
// var sum = 0;
// for (i = 0; i < 5; i++) {
//   numberArray[i] = parseInt(prompt("Enter a Number for store"));
//   console.log(numberArray[i]);
//   sum += numberArray[i];
// }
// console.log(sum);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // var arr = ["rashedul", "islam", "shihab", "arman"];
// var newArray = arr.slice(1);
// console.log(newArray);

//sort method

// var a = [1.1, 58, 2.2, 8, 9, 7, 4, 5, 6, 8, 2, 3, 5, 1];
// a.sort(function (a, b) {
//   return b - a;
// });
// console.log(a);
//======================================================

// console.log(Math.sqrt(25));
// console.log(Math.abs(-1));
// console.log(Math.cos(15));
// console.log(Math.sin(15));
// console.log(Math.pow(2, 2));
// console.log(Math.floor(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.round(8.5));

// var computer = {
//   price: 25000,
//   color: "black",
//   processor: "core i5",
//   RAM: "8GB single stick",
// };
// computer.price = 20000;
// computer["price"] = 21000;
// var updatePrice = "price";
// computer[updatePrice] = 22000;

// console.log(computer);

var numberOfWin = 0;
var numberOfLost = 0;
for (i = 0; i < 5; i++) {
  var input = parseInt(
    prompt("আপনার পছন্দের ০ থেকে ৯ এর মধ্যে একটা নাম্বার লিখুন ")
  );

  var a = Math.floor(Math.random() * 10);
  if (input == a) {
    console.log(" অভিনন্দন , আপনি বিজয়ী");
    numberOfWin++;
  } else {
    console.log(
      "আবার চেষ্টা করুন । আপনি ইনপুট দিয়েছেন   " +
        input +
        " কিন্তু আমাদের দরকার " +
        a
    );
    numberOfLost++;
  }
}

document.write("জিতেছেন : " + numberOfWin + " বার" + "<br/>");
document.write("হেরেছেন : " + numberOfLost + " বার ");

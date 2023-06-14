// Program to Validate the ten digit phone number.
var NumberCheck = function (phone) {
    var arr = phone.split(""); //Converting into array of strings
    var n = 0; //For Checking the length of the phone number.
    var num = 0; //For checking digits as 10.
    for (var i = 0; i < arr.length; i++) {
        // Condition Checking for the digit and dashes.
        if (!isNaN(arr[i]) || arr[i] === '-') {
            n += 1;
            if (!isNaN(arr[i])) {
                num += 1;
            }
        }
    }
    if (n === arr.length && num === 10) {
        return "1"; //Valid Phone Number
    }
    else if (n === 0) {
        return "-1"; //Empty Phone Numeber
    }
    else {
        return "0"; // Invalid Phone Number
    }
};
var phonenumber1 = "99-0-999898"; //Invalid because only 9 digits.
var phonenumber2 = "99-89897-253"; //Valid
var phonenumber3 = "345-%344-5769"; // Invalid due to % sign.
var phonenumber4 = ""; // Empty Phone Number.
console.log(NumberCheck(phonenumber1));
console.log(NumberCheck(phonenumber2));
console.log(NumberCheck(phonenumber3));
console.log(NumberCheck(phonenumber4));

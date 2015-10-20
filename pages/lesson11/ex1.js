var nums = [5, 10, 20, 50, 100, 250];

console.log(nums[0]);
console.log(nums[5]);
console.log(nums[6]);
var index = 4;
console.log(nums[index]);
var len = nums.length;
console.log(nums[len]);
console.log(nums[len - 1]);

var all_kinds_of_stuff = ["Hello", 3, undefined, true, ["woah", "dude", "an array", "inside an array"], null];

console.log(all_kinds_of_stuff[0]);
console.log(all_kinds_of_stuff[1]);
console.log(all_kinds_of_stuff[5]);
console.log(all_kinds_of_stuff[6]);

var another_array = all_kinds_of_stuff[4];

console.log(another_array[0]);
console.log(all_kinds_of_stuff[4][1]);

var recipe = [];
recipe[0] = "pour milk in glass";
recipe[1] = "add protein powder";
recipe[2] = "stir";

console.log(recipe[0]);
var lastStep = 2;
console.log(recipe[lastStep]);

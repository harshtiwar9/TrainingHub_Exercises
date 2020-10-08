// List all and names which are near me
const friends = [
    { id: 1, name: 'Sting', nearMe: true },
    { id: 2, name: 'Radiohead', nearMe: true },
    { id: 3, name: 'NIN', nearMe: false },
    { id: 4, name: 'Echo', nearMe: true },
    { id: 5, name: 'Zeppelin', nearMe: false }
];

//Answer-1

console.log("Answer-1 : ");

function nearMe(friends) {
    for (let friend in friends)
    //console.log(friends[friend].nearMe);
        if (friends[friend].nearMe === true)
        console.log("Id :" + friends[friend].id + " Name :" + friends[friend].name);
}

nearMe(friends);
console.log("\n");

//Guess the output

var log1 = function(message) {
    console.log(message);
};


log1("In JavaScript, functions are variables");

const logconst = log1;

log1 = function() {
    console.log("updated log 1");
};

//log("In JavaScript, functions are variables");

//Answer 2

console.log("Answer-2 : var log1 is assigned with function which return in Console'In JavaScript, functions are variables'\n" +
    "log1 assigned to logConst \n" +
    "log is not defined so not possible to call //so commented to run the code \n");

// Understand what is going on

let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColor = function(title, colors) {
    colors.push({ title: title });
    return colors;
};

console.log(addColor("Glam Green", list).length); // 4
console.log(list.length); // 4

//Answer 3

console.log("Answer-3 : Here addColor assigned with function which have paramter of title and color \n" +
    "but first when it call first time it is pushed with 1 more data and it return the length of list \n" +
    "second time it log the list length");

//Arrow Function
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.map(elm => elm * elm));
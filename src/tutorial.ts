
const names: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

function isNameInArray(name: string): boolean {
    return names.includes(name);
}

console.log("Is Alice in the array?", isNameInArray('Alice'));
console.log("Is Frank in the array?", isNameInArray('Frank'));
console.log("Is Bob in the array?", isNameInArray('Bob'));
console.log("Is Grace in the array?", isNameInArray('Grace'));
console.log("Is Eve in the array?", isNameInArray('Eve'));



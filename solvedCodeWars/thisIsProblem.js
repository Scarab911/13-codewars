function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return { name: this.firstName + ' ' + this.lastName, lastName: this.lastName, firstName: this.firstName };
}
var n = new NameMe('John', 'Doe');
// console.log(this.firstName, this.lastName);
console.log(n);
console.log(n.firstName);
console.log(n.lastName);

console.log((typeof n.firstName != undefined && n.firstName == "John"), "Verifying First name. Object returned should contain the firstname: John");
console.log((typeof n.lastName != undefined && n.lastName == "Doe"), "Verifying Last name. Object returned should contain the lastname: Doe");
console.log((typeof n.name != undefined && n.name == "John Doe"), "Verifying full name. Object returned should contain the full name: John Doe");
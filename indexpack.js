const upperCase= require("upper-case").upperCase;

function greet(name) {
    console.log(upperCase(`hello ${name} ,welcome to here`));
}
greet("shireen")
module.exports =greet
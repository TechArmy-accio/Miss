

// console.log(this)


// let obj = {
//     name: "Abhi", 
//     age : 30,
//     hello : function(){
//         console.log(this.name, this.age)
//     }
// }

// in case of methods "t"his refers to the object itself

// obj.hello()




// let x = obj.hello

// x()


// function hello(){
// console.log(this)
// }

// console.log(typeof obj.hello())

// hello()




function hii(){
    console.log(this.name, this.age)
}

let obj = {
    name: "Abhi", 
    age : 30,
    hello : hii
}

obj.hello()
console.clear();

//Blocking Sync

const sayHi = name => console.log(`Hello, ${name}`);
sayHi("Yuki")
sayHi("Bryan")
sayHi("Shinhee")

//non-blocking Async

setTimeout(sayHi,2500,"2500 Michael");
setTimeout(sayHi,3500,"3500 George");
setTimeout(sayHi,1500,"1500 Bob");
sayHi("erio")

// Call back function (t0 call the call back function)
const greeting = (name, farewell) => {
    console.log(`Hello, ${name}`);
    farewell(name);
}

// Call back function (t0 be called)
const farewell = name => console.log(`Goodbye ${name}`)


greeting("Shown Gee", farewell)
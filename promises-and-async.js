console.clear();

//callbacks
const washup = () =>{
    console.log("Wash Yuor hands!!")
}

//call me
const callMe = async name => {
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Time for dinner, ${name}!!!`)
            return resolve();
        },2000)    
    })
}

// //first func
// setTimeout((name) => {
//     console.log("Done like dinner");
//     callMe(name)

// }, 2000, "Yuki");


// //Promises

// new Promise((resolve, reject)=>{
//   setTimeout(() => {
//       console.log("Done like dinner");
//       resolve();
//   }, 2000);  
// }).then(() => callMe("Yuki"))


//Async/await
const asyncFunc = async (name) => {
    await new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Done like dinner");
            return resolve();
        }, 2000);
    })

    await callMe(name);
    washup()
}

asyncFunc("Yuki Miyazawa")

const iffi = ((async) => {
    console.log("Iam iffy about IFFEEs")
})();
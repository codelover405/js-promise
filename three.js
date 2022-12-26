console.log("l........l");
let data=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(10)
        // reject("Error...")
    }, 3000);
})
// console.log(data);
data.then((i)=>{
    console.log("1st",i);
    return i*10;
}).then((i)=>{
    console.log("2st",i);
    return i*10;
}).then((i)=>{
    console.log("3st",i);
})


// let data1 =fetch("'https://dummyjson.com/products")

// // console.log(data1);
// data1.then((e)=>{
//     // console.log(e);
//     return e.json();
// }).then((result)=>{
//     console.log("second output",result);
// })





// API call karva mate 2 promise resolve karva pade



// resolve => then 
// reject => catch
// finally => resolve and reject bane mate cale




let data=new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve({name:"utsav",age:20})
        reject("Error...")
    }, 3000);
})

// console.log(data);
data.then((result) => {
    console.log(result);
})
// console.log("Hello");
.catch((err) => {
    console.log("catch Block",err);
});




// error handle karva mate catch


// promise banawyo and resolve karyo
let data =Promise.race([
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("2 Second");
        }, 2000)
    }) ,
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("1 Second");
        }, 1000)
    }) ,
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("4 Second");
        }, 4000)
    })  
])

data.then((i)=>{
    console.warn("then block",i);
}).catch((err)=>{
    console.warn("catch block",err);
})


// Promise.All => 4 second pachi result de        || same forment || 3 in 1  reject :  reject j bhatave not resolve
// Promise.allSettled => 4 second pachi result de || same forment || reject and resolve bhatave
// Promise.race => first time = first result   settime out




// all => result  last second de badha  resolve thayjay tyare  || koy ma pan Error ave to all Error
// allsettled => ketla Fail thay and ketla resolve thay te ke 
// race => first je resolve thay te nu result de , pachi second and last 
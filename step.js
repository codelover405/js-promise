console.warn("hello");

let data=1;
console.log(data);


data=2;
setTimeout(() => {
    console.log("time",data);
}, 3000);

data=3;
console.log("last",data);


// this is a javascript problem
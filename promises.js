// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve("Success");

// })
let promise = new Promise((resolve,reject)=>{
    console.log("I am a promise");
    reject("Failed");
    
})


function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data",dataId);
            resolve("Sucess")
            if(getNextData){
                getNextData()
            }
        }, 2000);
    })
}
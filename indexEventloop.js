Promise.resolve().then(()=>{
    console.log("this is the Promise cb 1");
})
Promise.resolve().then(()=>{
    console.log("this is the Promise cb 2");
    Promise.resolve().then(()=>{
        console.log("this is the Promise cb 2 in 2");
    })
})
Promise.resolve().then(()=>{
    console.log("this is the Promise cb 3");
})

process.nextTick(()=>{
    console.log("next tick 1");
})
process.nextTick(()=>{
    console.log("next tick 2");
    process.nextTick(()=>{
        console.log("next tick 2 in 2");
    }) 
})
process.nextTick(()=>{
    console.log("next tick 3");
})
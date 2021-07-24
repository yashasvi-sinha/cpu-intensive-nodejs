function heavyTask(loopLimit = 500000000000000) {
          
    let count = 0;
    for (let index = 0; index < loopLimit; index++) {
        count += 1;
        console.log(`Count is ${count}`);
    }
    return count;
}

process.on('message', (num) => {

    const result = heavyTask(num)

    process.send(result)

})
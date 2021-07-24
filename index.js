const express = require('express');
const app = express();

const { fork } = require('child_process')
// const workerPool = require('workerpool');
// const pool = workerPool.pool();

const task = require('./tasks')

app.get('/abc', async (req, res) => {
    
    
    // const count = await pool.exec(task.heavyTask, [10000000])
    const child = fork('./tasks')
    
    child.on('message', (count) => {
        
        res.json({count});
        
        child.kill()
    })
    
    child.send(500000, 65465)
   

});


app.get('/xyz', (req, res) => {
    res.send('Hello World!');
});


app.listen(3000, () => {
    console.log('Server app listening');
});

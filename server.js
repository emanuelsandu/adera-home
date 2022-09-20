const {readFileSync, writeFileSync}=require('fs');

const express=require("express");
const app=express();
const port=5555;

app.get('/',(req,res)=> {
    const count=readFileSync('./count.txt','utf-8');
    //console.log('count',count);
    const newCount=parseInt(count)+1;
    writeFileSync('./count.txt',newCount.toString());
    
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
            </head>
            <body>
                <p>total views: ${newCount}</p>
            </body>
        </html>
    `);
});

app.listen(port,()=>console.log('http://localhost:${port}/'));

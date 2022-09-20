const {readFileSync, writeFileSync}=require('fs');

const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");
const port=process.env.PORT||5555;
const app=express();

app.use(express.static(__dirname));

app.get('/',(req,res)=> {
    const count=readFileSync('./count.txt','utf-8');
    //console.log('count',count);
    const newCount=parseInt(count)+1;
    writeFileSync('./count.txt',newCount.toString());
    /*
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
    */
    res.sendFile(path.join(__dirname,"index.html"));
});

app.listen(port,()=>console.log('http://localhost:${port}/'));

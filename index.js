const fs=require("fs");
const path = require('path');
const[,,dir]=process.argv;


fs.readdir(`./${dir}`,(err,data)=>{
    data.forEach(
        (x)=>{
            let dirtype;
            if(path.extname(x))
            {
              dirtype=path.extname(x);
            }
            else{
              dirtype='Folder'
            }
            console.log(x," ","File Type:",dirtype)
        }
    );
    });
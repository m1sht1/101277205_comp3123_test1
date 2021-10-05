var fs = require('fs');
path=__dirname;
logsPath=__dirname+"\\Logs"
if(fs.existsSync(logsPath)){
    var files = fs.readdirSync(__dirname+"/Logs");
    if(files.length>0){
        console.log("Existing Files")
        for(file of files){    
                console.log(file) 
        }    
        for(file of files){    
            console.log("Deleting File....." + file)     
            fs.unlink(logsPath +"\\" +file,function (){
            })    
    }     
    console.log("Files Deleted\n")
    }   
    console.log("Removing Folder ")
    fs.rmdir(logsPath,function (){        
    }) 
    console.log("Folder Deleted\n")
}
console.log("Making folder")
    fs.mkdir(logsPath,function(){
})
console.log("Folder Created\n")
console.log("Creating Files")
if(fs.existsSync(logsPath)){ 
    for(let i =0;i<10;i++){
        fs.writeFile(logsPath+'\\Logs'+[i]+".txt","Some content",function(){})
    }
console.log("Files created")
}
console.log(logsPath)
if(fs.existsSync(logsPath)){
    var files = fs.readdirSync(__dirname+"\\Logs");
    if(files.length>0){
        for(file of files){    
            console.log(file) 
        }      
    } 
}
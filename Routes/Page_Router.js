'use strict';
const { Console } = require('console');
const e = require('express');
//จัดการRouting
const express = require('express') 
const router = express.Router() 
const fs = require('fs');



var apiInit = {
    "todo":[],
    "inpro":[],
    "done":[],
    "signal":1
}
var WriteF =""

router.get("/", async(req,res) => {
   let A ="";
   let B ="";
   let C ="";
    fs.readFile("my_File/API.txt","utf8",(err,data)=>{
        if(err)return console.log(`err_R ${err}`)
        
        if(data == ""){
             WriteF = JSON.stringify(apiInit);

             fs.writeFile("my_File/API.txt",WriteF,err=>{
                if(err) return console.log(`err_W ${err}`)
                console.log("W file Done**")
            })
        }
        else{
            // WriteF = data;
            let obj = JSON.parse(data);
            console.log(obj);
            A = obj.todo[0] == undefined ? "-":obj.todo[0] 
            B = obj.inpro[0] == undefined ? "-":obj.inpro[0] 
            C = obj.done[0] == undefined ? "-":obj.done[0] 
        console.log("start");  
        console.log(A);
        console.log(B);
        console.log(C);
          
        }
        console.log(apiInit.signal);

        let lenge_show = 1;
        let lenge_show2 = 1;
        let lenge_show3 = 1;

        res.render('Todolist',{lenge_show:lenge_show,lenge_show2:lenge_show2,lenge_show3:lenge_show3,A:String(A),B:String(B),C:String(C),signal:apiInit.signal})
       
    })
    
   /* start.map(e=>{
        if(e == undefined || e==""){
            e = "A";
        }
       // console.log(e);
        return e
       })*/
       
       
        //console.log("start");  
        //console.log(start);
        
    
   

    
    
})


router.post("/Admin_set_TODO", async(req,res) => {
   /* let lenge_show = 1;
    let lenge_show2 = 1;
    let lenge_show3 = 1;*/
   // let addData = req.body;
    const addData = Object.keys(req.body);
    //console.log(addData);
    fs.readFile("my_File/API.txt","utf8",(err,data)=>{
        if(err)return console.log(`err_R ${err}`)
        let obj = JSON.parse(data);
        obj.todo.push(...addData)
        obj.signal = 0
     
        console.log(obj)
        fs.writeFile("my_File/API.txt",JSON.stringify(obj),err=>{
            if(err) return console.log(`err_W ${err}`)
            console.log("W file Done**")
        })
        
        
    })

    res.send("OK send")
    
})

router.put("/Admin_Inpro_TODO", async(req,res) => {
    /* let lenge_show = 1;
     let lenge_show2 = 1;
     let lenge_show3 = 1;*/
    // let addData = req.body;
     const addData2 = Object.keys(req.body);
     //console.log(addData);
     fs.readFile("my_File/API.txt","utf8",(err,data)=>{
         if(err)return console.log(`err_R ${err}`)
         let obj = JSON.parse(data);
         obj.todo = [];
         obj.inpro.push(...addData2);
         obj.signal = 0
      
         console.log(obj)
         fs.writeFile("my_File/API.txt",JSON.stringify(obj),err=>{
             if(err) return console.log(`err_W ${err}`)
             console.log("W file Done**")
         })
         
         
     })
 
     res.send(addData2)
     
 })

 router.put("/Admin_Done_TODO", async(req,res) => {
    
     const addData3 = Object.keys(req.body);
     //console.log(addData);
     fs.readFile("my_File/API.txt","utf8",(err,data)=>{
         if(err)return console.log(`err_R ${err}`)
         let obj = JSON.parse(data);
         obj.todo = [];
         obj.inpro = [];
         obj.done.push(...addData3);
         obj.signal = 0
      
         console.log(obj)
         fs.writeFile("my_File/API.txt",JSON.stringify(obj),err=>{
             if(err) return console.log(`err_W ${err}`)
             console.log("W file Done**")
         })
         
         
     })
 
     res.send(addData3)
     
 })

 router.delete("/Admin_Remove_TODO", async(req,res) => {
    
    const remove = Object.keys(req.body);
    if(remove == "todo"){
        fs.readFile("my_File/API.txt","utf8",(err,data)=>{
            if(err)return console.log(`err_R ${err}`)
            let obj = JSON.parse(data);
            obj.todo = [];
            obj.signal = 1
         
            console.log(obj)
            fs.writeFile("my_File/API.txt",JSON.stringify(obj),err=>{
                if(err) return console.log(`err_W ${err}`)
                console.log("W file Done**")
            })
            
            
        })

    }
    else if(remove =="inpro"){
        fs.readFile("my_File/API.txt","utf8",(err,data)=>{
            if(err)return console.log(`err_R ${err}`)
            let obj = JSON.parse(data);
            
            obj.inpro = [];
            obj.signal = 1
         
         
            console.log(obj)
            fs.writeFile("my_File/API.txt",JSON.stringify(obj),err=>{
                if(err) return console.log(`err_W ${err}`)
                console.log("W file Done**")
            })
            
            
        })

    }
    else if(remove == "done"){
        fs.readFile("my_File/API.txt","utf8",(err,data)=>{
            if(err)return console.log(`err_R ${err}`)
            let obj = JSON.parse(data);
            
            obj.done = [];
            obj.signal = 1
         
            console.log(obj)
            fs.writeFile("my_File/API.txt",JSON.stringify(obj),err=>{
                if(err) return console.log(`err_W ${err}`)
                console.log("W file Done**")
            })
            
            
        })
    }
    //console.log(addData);
    

    res.send("delete")
    
})








module.exports = router
var express=require("express")
let fs=require("fs")
var app=express()
app.get("/sweets",(req,res)=>{
    fs.readFile("sweets.json","utf-8",(err,data)=>{
        if(err){
            res.send({
                msg:err.message
            })
        }else{
            res.send({
                data:JSON.parse(data)
            })
        }
    })
})
app.get("/sweets/:id",(req,res)=>{
    // console.log(req.params)
    fs.readFile("sweets.json","utf-8",(err,data)=>{
        if(err){
            res.send({
                // status:400
                err:err.msg
            })
        }else{
          let dataa=JSON.parse(data)
          let filtered=dataa.sweets.filter((val)=>{
            return val.id==(req.params.id)
          })
          res.send(filtered)
        }
    })
})
let port=3009;
app.listen(port,()=>{
    console.log("server is running")
})



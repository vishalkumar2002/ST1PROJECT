const express=require("express")

const fs=require("fs")

const app=express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.get("/teachers",(req,res)=>{

       fs.readFile("./teachers.json","utf-8",(error,data)=>{

        // console.log(data)

        res.send(JSON.parse(data))

    })

})

app.delete("/teacher/:id",(req,res)=>{

    fs.readFile("./teachers.json","utf-8",(error,data)=>{

    x=JSON.parse(data);

    let temp_arr=[]

    for(i of x){

        if(i.id!=req.params.id){

            temp_arr.push(i);

        }

    }

    temp_arr=JSON.stringify(temp_arr)

    fs.writeFile("./teachers.json",temp_arr,"utf-8",(error)=>{

        console.log(error);

    })

    res.send(temp_arr)

})  

})

app.put("/teacher/:id",(req,res)=>{

       fs.readFile("./teachers.json","utf-8",(error,data)=>{

    x=JSON.parse(data);

    let temp_arr=[]

    for(i of x){

        if(i.id==req.params.id){

            i.name=req.body.name

            i.department=req.body.department

            i.age=req.body.age

            i.address=req.body.address

        }

       

    }

    x=JSON.stringify(x)

 

    //temp_arr=JSON.stringify(temp_arr)

    fs.writeFile("./teachers.json",x,"utf-8",(error)=>{

        console.log(error);

    })

    res.send(x)

})

})


 

app.post("/teacher",(req,res)=>{

    const id1=Date.now().toString()

    let t=req.body

    t.id=id1

 

    fs.readFile("./teachers.json","utf-8",(error,data)=>{

    x=JSON.parse(data);

    let z=[...x,t]

    z=JSON.stringify(z)

    //temp_arr=JSON.stringify(temp_arr)

    fs.writeFile("./teachers.json",z,"utf-8",(error)=>{

        console.log(error);

    })

    res.send(z)

})

})

app.get("/teacher/:id",(req,res)=>{

    fs.readFile("./teachers.json","utf-8",(error,data)=>{

    let ty=JSON.parse(data);

    let arr=[]

    for(i of ty){

        if(i.id==req.params.id){

            arr.push(i);

        }

    }
   // console.log(arr);
   // console.log(arr[0].id)
   let result={
    id:arr[0].id,
    name:arr[0].name,
    department:arr[0].department
   }
   //console.log(result)
    //arr=JSON.stringify(arr)
    result=JSON.stringify(result)

    res.send(result)

})

     

})

app.listen("5000",()=> console.log('listening on port 5000'));

const { PrismaClient } = require("@prisma/client");
const express = require("express");


const app = express();
app.use(express.json());
const prisma = new PrismaClient();

const PORT = 3000;

app.get("/", (req, res) => {
    //data from frontend


    //db logic here


    //data to frontend

    res.send("Api Working")
})

app.get("/restaurents", async (req, res) => {
    try {
        // data from frontend


        // db logic
        const restaurentsData = await prisma.restaurent.findMany();


        // data to frontend
        res.send(restaurentsData)


    } catch (error) {
        console.log(error);

    }

})

app.get("/restaurents/:id",async(req,res)=>{

    try {
        // data from frontend
const data= req.params;


// db logic

const restaurentsData=await prisma.restaurent.findUnique({

    where:{restaurent_id:data.id}


}) 
//data to frontend
res.json({message:"data get successfully",data:restaurentsData})


}
        
     catch (error) {
        console.log(error);
        
    }})

    app.post("/restaurents",async(req,res)=>{
        try {
            //data from frontend

            const data=req.body;
            //db logic

            const newRestaurent=await prisma.restaurent.create({
                data:{
                    restaurent_id:data.restaurent_id,
                    name:data.name,
                    location:data.location,
                    image_url:data.image_url,
                    offers:data.offers,
                }
            })

            res.json({message:"restaurent data added successfully",data:newRestaurent})
        } catch (error) {
            res.status(500).json({message:"something went wrong",error:error.message})
        }
    })

    app.put("/restaurents",async(req,res)=>{
        try {
           //data from frontend 
const data=req.body;

           //db logic
           const updatedRestaurent=await prisma.restaurent.update({
            where:{restaurent_id:data.restaurent_id},
            data:{
                name:data.name,
                location:data.location,
                image_url:data.image_url,
                offers:data.offers
            }
           })

           //data to frontend

res.status(200).json({message:"restaurent data updated successfully",data:updatedRestaurent})

        } catch (error) {
         res.status(500).json({message:"something went wrong",error:error.message})   
        }
    })
    app.delete("/restaurents",async(req,res)=>{
        try {
            //data from frontend
            const data=req.body;
            //db logic
            const deletedRestaurent=await prisma.restaurent.delete({
                where:{restaurent_id:data.restaurent_id}
            })
            res.status(200).json({message:"restaurent data deleted successfully"})
        } catch (error) {
            res.status(500).json({message:"something went wrong",error:error.message})
        }
    })

app.listen(PORT, () => {
    console.log("server started", PORT);

}) 
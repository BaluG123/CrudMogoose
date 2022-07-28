const mongoose = require('mongoose');
const proSch = new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    email:String
})

// Create Operation with mongoose
/*
const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/Employee")
    const product = mongoose.model("details",proSch)
    let data = new product(
    {name:"Balesh",age:17 , gender:"male",email:"balesh41998@gmail.com"});
    const result = await data.save()
    console.log(result)
};
main();  */

/* Update with mongoose 
const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/Employee")
    const product=mongoose.model("details",proSch)
    let data = await product.updateOne(
        {name:"Basavaraj"},
        {$set: {name:"basu"}}
    )
    console.log(data)
}

main(); */

/* delete with mongoose !
const main = async () =>{
    await mongoose.connect("mongodb://localhost:27017/Employee")
    const product = mongoose.model("details",proSch)
    let data = await product.deleteOne(
        {name:"sajeev"}
    )
    console.log(data)
}
main(); */

const main = async () =>{
    await mongoose.connect("mongodb://localhost:27017/Employee")
    const product = mongoose.model("details",proSch)
    let data = await product.find({name:'samrin'});
    console.log(data)
}
main();


const router = require("express").Router()

const uuid = require("../helpers/uuid");
const utils = require("../helpers/fsUtils");

router.get("/notes",(req,res)=>{
   utils.readFromFile("./db/db.json").then(data=> res.json(JSON.parse(data))) 
})

router.post("/notes",(req,res)=>{
const newNote = {
    title: req.body.title,
    text: req.body.text,
id: uuid()}
utils.readAndAppend(newNote,"./db/db.json")
const response = {
    status: "Success", 
    body: newNote
}
res.json(response)
})

module.exports=router

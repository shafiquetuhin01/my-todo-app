const router = require('express').Router();
// import todo model 
const todoItemsModel = require('../models/todoItems')

// create first post route 
router.post('/api/item',async(req,res)=>{
    try {
        const newItem = new todoItemsModel({
            item:req.body.item
        })
        // save this item in db 
        const saveItem = await newItem.save()
        res.status(200).json(saveItem)
    } catch (error) {
        res.json(error)
    }
})

// get all data 
router.get('/api/item',async(req,res)=>{
    try {
        const getAllData = await todoItemsModel.find({}) 
        res.status(200).json(getAllData)
    } catch (error) {
        res.json(error)
    }
})

// update data 
router.put('/api/item/:id',async(req,res)=>{
    try {
        const updateOne = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set:req.body})
        res.status(200).json('Items updated')
    } catch (error) {
       res.json(error); 
    }
})

// delete a item 
router.delete('/api/item/:id', async(req,res)=>{
    try {
      const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id)  
      res.status(200).json("Items deleted")
    } catch (error) {
        res.json(error)
    }
})

module.exports = router



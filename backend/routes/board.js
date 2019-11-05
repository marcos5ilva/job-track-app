const router = require('express').Router();
let Board = require('../models/board.model');


router.route('/add').post(async (req, res) =>{
    console.log("board added!");
    const board = req.body;
    const newBoard = await Board.create(board);

    newBoard.save()
        .then( ()=> res.json('New board created'))
        .catch( err => res.status(400).json('Error: ')+ err);
})

router.route('/update/:id').patch(async (req, res) =>{
    console.log('Update endpoint requested');
    const updates =Object.keys(req.body);
    const allowedUpdates = ["content"];

    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(404).send({error: 'Invalid updates!'});
    }

    try{
        const board = await Board.findOneAndUpdate(req.params.id, req.body, { new: true, runValidators: true }) 

        if(!board){
            return res.status(404).send()
        }
        res.send(updates)
    } catch(e){
        res.status(400).send(e);
    }

})

router.route('/delete/:id').delete(async (req, res)=>{
    try{
        const board = await Board.findByIdAndDelete(req.params.id);

        if(!board){
            return res.status(404).send();
        }
        res.send({board});
        
    } catch(e){
        res.status(500).send(e);   
    }

})

module.exports = router;
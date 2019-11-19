const router = require('express').Router();
let Board = require('../models/board.model');
let Lists = require('../models/lists.model');
let Cards = require('../models/cards.model');

router.route('/').get(async (req, res)=>{
    try{
        const cards = await Cards.find();
        return res.send({cards});
    } catch(e){
        return res.status(400).send({error : 'Error loading cards'});
    }
    

    
})

router.route('/add/:id').patch(async (req, res)=>{
    try{
        console.log('Creating new card')
        console.log('List param.id '+req.params.id);
        const {cards} = req.body;
        const list = await Lists.findByIdAndUpdate(req.params.id, { new: true, runValidators: true }) 
        console.log('List param.id '+req.params.id);
        console.log('list to be updated: '+ list);
        console.log(list);
        if(!list){
            return res.status(404).send()
        }

        await Promise.all (cards.map( async card => {
            const newCardUpdated = new Cards({ ...card, list: list._id});
            
            await newCardUpdated.save();
            
            list.cards.push(newCardUpdated);  
            await list.save();
            res.json(newCardUpdated);
        }));


        
    }catch(e){

        return res.status(400).send({Error: 'Error creating new card'+e.message})
    
    }
})

router.route('/:id').delete(async (req, res)=>{
    try{
       
       await Cards.findByIdAndDelete(req.params.id);
       res.send('Card deleted');

    }catch(e){
        res.status(400).send({Error: 'Error removing card'})
    }
    
})

module.exports = router;
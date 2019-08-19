const router = require('express').Router();
const bcrypt = require ('bcrypt');
const User = require('../models/user.model');


router.route('/').get((req, res) =>{
    User.find()
        .then(users=> res.json(users))
        .catch(err => res.status(400).json('Error: '+ err));       
})

router.route('/signin').post(async (req, res)=> {
    
    const {email, password} = req.body;
    
    const user = await User.findOne({ email }).select('+password');
    const isMatch = !await bcrypt.compare(password, user.password);
    console.log("typed password : "+password);
    console.log("retrieved encrypted user.password : "+user.password);
    console.log(isMatch);
        if(!user)
            return res.status(400).send({error: 'User not found'});
            
            
        if(!isMatch)
            return res.status(400).send({error: 'Wrong password'});
        
        res.send({user});
        res.redirect('/board');
            
  
 
})

router.route('/add').post(async (req, res)=> {
    const user = req.body;

    const newUser = await User.create(user);

    newUser.save()
        .then(()=> res.json('User added!'))
        .catch(err => res.status(400).json('Error: '+ err));
})

router.route('/update/:id').post((req, res)=> {
    User.findById(req.params.id)
    .then(users=> {
        users.username = req.body.username;

        users.save()
            .then(()=>res.json('User update!'))
            router.route('/:id').get((req, res)=> {
                User.findById(req.params.id)
                .then(users=> res.json(User))
                .catch(err => res.status(400).json('Error: '+ err)); 
            })
    })
        .catch(err => res.status(400).json('Error: '+ err)); 
})

router.route('/:id').delete((req, res)=> {
    User.findByIdAndDelete(req.params.id)
    .then(users=> res.json('User deleted'))
        .catch(err => res.status(400).json('Error: '+ err)); 
})



module.exports = router;
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

router.route('/board/update').post((req, res) =>{
    const board = req.body;

    
}
)

module.exports = router;
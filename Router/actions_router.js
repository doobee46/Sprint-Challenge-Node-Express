const express = require('express');
const actionDb = require('../data/helpers/actionModel');

const parser = express.json();
const router = express.Router();

router.use(parser)

//endpoints 

router.get('/', (req, res) =>{
  actionDb.get()
  .then(actions =>{
    res.json(actions)
  })
  .catch(err =>{
    res
    .status(500)
    .json({errorMessage: "Unable to retrieve actions"})
  })
})

router.get('/:id', (req, res) =>{
  const { id } = req.params
  actionDb.get(id)
  .then(action =>{
    if(action){
      res.json(action);
    }
    else{
      res
      .status(404)
      .json({errorMessage:"The action with specified ID doesn't exist"})
    }
  })
  .catch(err =>{
    res
    .status(500)
    .json({errorMessage:"The action information cannot be retrieved"})
  })
})

router.post('/',(req, res) =>{
  const action = req.body
  if(action.project_id && action.description ){
    actionDb.insert(action)
    .then(actionInfo =>{
      actionDb.get(actionInfo.id)
        .then(action=>{
        res.status(201).json(action)
      })
    })
    .catch(err =>{
      res
      .status(500)
      .json({message:"There was an error while saving the action to the database"})
    })
  }
  else{
  res
  .status(400)
  .json({message:" The action text or description is missing  "})
  } 
})

router.delete('/:id',(req, res) =>{
  const { id } = req.params;
  actionDb.remove(id)
  .then(count=>{
    if(count){
      res.json({message:" The action has been successfully deleted"})
    }
    else{
      res
      .status(404)
      .json({errorMessage:"The action with specific ID doesn't exist "})
    }
  })
  .catch(err =>{
    res
    .status(500)
    .json({errorMessage:" Unable to delete record"})
  })
})


router.put('/:id',(req,res) =>{
  const { id } = req.params
  const action  = req.body
  if(action.notes && action.description){
    actionDb.update(id, action)
    .then(count =>{
      if(count){
        actionDb.get(id).then(action =>{
          res.json(action)
        })
      }
      else{
        res
        .status(404)
        .json({message:"The action with the specified ID does not exist. "})
      }
    })
    .catch(err =>{
      res
      .status(500)
      .json({message:"The action information could not be modified."})
    })
  }
  else{
  res
  .status(400)
  .json({message:"the action notes or description is missing  "})
  }
  
})


module.exports = router;
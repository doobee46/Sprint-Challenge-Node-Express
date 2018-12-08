const express = require('express');
const projectDb = require('../data/helpers/projectModel');
const actionDb = require('../data/helpers/actionModel');

const parser = express.json();
const router = express.Router();

router.use(parser)

//endpoints 

router.get('/', (req, res) =>{
  projectDb.get()
  .then(projects =>{
    res.json(projects)
  })
  .catch(err =>{
    res
    .status(500)
    .json({errorMessage: "Unable to retrieve projects"})
  })
})

router.get('/:id', (req, res) =>{
  const { id } = req.params
  projectDb.get(id)
  .then(project =>{
    if(project){
      res.json(project);
    }
    else{
      res
      .status(404)
      .json({errorMessage:"The project with specified ID doesn't exist"})
    }
  })
  .catch(err =>{
    res
    .status(500)
    .json({errorMessage:"The project information cannot be retrieved"})
  })
})

router.post('/',(req, res) =>{
  const project = req.body
  if(project.name && project.description){
    projectDb.insert(project)
    .then(projectInfo =>{
      projectDb.get(projectInfo.id)
        .then(project=>{
        res.status(201).json(project)
      })
    })
    .catch(err =>{
      res
      .status(500)
      .json({message:"There was an error while saving the project to the database"})
    })
  }
  else{
  res
  .status(400)
  .json({message:" The project body  text is missing  "})
  } 
})

router.delete('/:id',(req, res) =>{
  const { id } = req.params;
  projectDb.remove(id)
  .then(count=>{
    if(count){
      res.json({message:" The project has been successfully deleted"})
    }
    else{
      res
      .status(404)
      .json({errorMessage:"The project with specific ID doesn't exist "})
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
  const project = req.body
  if(project.name && project.description){
    projectDb.update(id, project)
    .then(count =>{
      if(count){
        projectDb.get(id).then(project =>{
          res.json(project)
        })
      }
      else{
        res
        .status(404)
        .json({message:"The project with the specified ID does not exist. "})
      }
    })
    .catch(err =>{
      res
      .status(500)
      .json({message:"The project information could not be modified."})
    })
  }
  else{
  res
  .status(400)
  .json({message:"the project name or description is missing  "})
  }
  
})


module.exports = router;
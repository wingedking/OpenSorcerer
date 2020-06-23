const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/projects',
  projectController.getProjects,
  (req, res) => res.status(200).json());

router.get('/project/:project_id',
  projectController.getProjectDetails,
  (req, res) => res.status(200).json());

router.post('/project',
  projectController.addProject,
  (req, res) => res.status(200).json());
  
router.put('/project')


module.exports = router;

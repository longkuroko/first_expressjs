const express = require('express');
const router = express.Router(); 
const courseController = require('../app/controller/CourseController');

// newsController.index;
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormAction)
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forceDelete);
router.patch('/:id/restore', courseController.restore);
router.get('/:slug', courseController.show);





module.exports = router;
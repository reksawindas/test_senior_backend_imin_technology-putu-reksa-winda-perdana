const router = require('express-promise-router')();
const measurementController = require('../controllers/measurements-controller');
const ingeredientStateController = require('../controllers/ingredient-state-controller');
const ingeredientTypeController = require('../controllers/ingredient-type-controller');
const ingeredientLibraryController = require('../controllers/ingredient-library-controller');
const inflowController = require('../controllers/inflow-controller');

// Router For UNIT MEASUREMENT
router.post('/add-measurment', measurementController.createMeasurment);
router.get('/list-measurment', measurementController.listAllMeasurment);
router.get('/measurment/:id', measurementController.findMeasurementById);
router.put('/edit-measurment/:id', measurementController.updateMeasurementById);
router.delete('/delete-measurment/:id', measurementController.deleteMeasurementById);

// Router For INGREDIENT STATE
router.post('/add-ingredient-state', ingeredientStateController.createIngredientState);
router.get('/list-ingredient-state', ingeredientStateController.listAllIngredientState);
router.get('/ingredient-state/:id', ingeredientStateController.findIngredientStateById);
router.put('/edit-ingredient-state/:id', ingeredientStateController.updateIngredientStateById);
router.delete('/delete-ingredient-state/:id', ingeredientStateController.deleteIngredientStateById);

// Router FOr INGREDIENT TYPE
router.post('/add-ingredient-type', ingeredientTypeController.createIngredientType);
router.get('/list-ingredient-type', ingeredientTypeController.listAllIngredientType);
router.get('/ingredient-type/:id', ingeredientTypeController.findIngredientTypeById);
router.put('/edit-ingredient-type/:id', ingeredientTypeController.updateIngredientTypeById);
router.delete('/delete-ingredient-type/:id', ingeredientTypeController.deleteIngredientTypeById);

// Router For INGREDIENT LIBRARY
router.post('/add-ingredient-library', ingeredientLibraryController.createIngredientLibrary);
router.get('/list-ingredient-library', ingeredientLibraryController.listAllIngredientLibrary);
router.put('/edit-ingredient-library/:id', ingeredientLibraryController.updateIngredientLibraryById);
router.delete('/delete-ingredient-library/:id', ingeredientLibraryController.deleteIngredientLibraryById);

// Router For INFLOW
router.post('/add-inflow', inflowController.createInflow);
router.get('/list-inflow', inflowController.listAllInflow);
router.delete('/delete-inflow/:id', inflowController.deleteInflowById);



module.exports = router;
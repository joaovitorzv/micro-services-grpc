const { Router } = require('express');

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");


const router = new Router();

router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);

module.exports = router;
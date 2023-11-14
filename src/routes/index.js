const express = require('express');
const userRouter = require('./user.router');
const cityRouter = require('./city.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter);
router.use('/cities', cityRouter);

module.exports = router;
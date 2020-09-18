const { Router } = require('express');

const productRouter = require('./products');
const apiRouter = require("./api");

const router = Router();

router.use('/products', productRouter);
router.use("/api", apiRouter);


module.exports = router;
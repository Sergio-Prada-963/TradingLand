const {Router} = require('express');
const {getUsers,postUsers,deleteUsers,patchUsers,putUsers} = require('../controllers/usuarios.controllers.js')
const router = Router();

router.get("/",getUsers);
router.post("/",postUsers);
router.delete("/",deleteUsers),
router.patch("/",patchUsers);
router.put("/",putUsers);

module.exports = router;
const router = require("express").Router();
const charController = require("../controllers/characters.controller");

//LIST OF DATA
router.get("/", charController.home);
router.get("/newcharacter", charController.addNew);
router.post("/newcharacter", charController.doAddNew);
router.delete("/character/:id", charController.delete);

module.exports = router;

"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setUserts_1 = require("../../controllers/users/setUserts");
var router = express_1["default"].Router();
router.post("/add-user", setUserts_1.addUser).post("/register", setUserts_1.register).post("/login", setUserts_1.login);
exports["default"] = router;

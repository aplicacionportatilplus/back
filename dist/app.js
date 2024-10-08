"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _routes = _interopRequireDefault(require("./routes"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
(0, _dotenv.config)();
var app = (0, _express["default"])();

// middleware
app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev"));

// app.use(cors({
//     origin: 'https://front-3nxi.onrender.com', 
//     credentials: true 
// }));
app.use((0, _cors["default"])());

// rutas
app.use("/", _routes["default"]);

// puerto
app.set("port", process.env.PORT || 3000);
var _default = exports["default"] = app;
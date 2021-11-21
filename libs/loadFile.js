"use strict";
exports.__esModule = true;
var fs = require("fs");
// load file from disk and return it as a string
var loadFile = function (filePath) {
    return fs.readFileSync(filePath, 'utf8');
};
exports["default"] = loadFile;

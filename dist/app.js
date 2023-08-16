"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 9000;
app.get('/', function (req, res) {
    console.log(req);
    res.send({ name: 'Jun', age: 256, friends: ['피카츄', '라이츄', '파이리', '꼬부기'] });
});
app.listen(port, function () {
    console.log("\uC608\uC81C\uC758 \uC571\uC740 http://localhost:".concat(port, "\uB97C \uAD6C\uB3D9\uD558\uACE0 \uC788\uC5B4\uC694~ \uD83E\uDD1E"));
});
//# sourceMappingURL=app.js.map
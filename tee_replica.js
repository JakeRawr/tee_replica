'use strict';
var fs = require('fs');
var ws = fs.createWriteStream(process.argv[2]);
var stdin = process.stdin;

stdin.pipe(ws);
stdin.pipe(process.stdout);

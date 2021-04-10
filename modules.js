//CommonJS, every file is module (by default);
//Modules - Encapsulates Code(only share minimum)
const names = require('./4-names');
const sayHi = require('./utils')
const data = require('./alternative-module')

require('./mindGrenade')

sayHi('susan')
sayHi(names.john);
sayHi(names.peter);


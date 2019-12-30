const Printer = require('./printer');
const NeptuneLiteUser = require('./neptuneliteuser');

Object.assign(exports, {
    Printer : Printer.getInstance(NeptuneLiteUser.getInstance().getDal().getPrinter())
});
const Printer = require('./printer/index');
const NeptuneLiteUser = require('./neptuneliteuser');
const AndroidConfig = require('sf-core/utils/Android/androidconfig');

module.export = {
    Printer : Printer.getInstance(NeptuneLiteUser.getInstance().getDal().getPrinter()),
}
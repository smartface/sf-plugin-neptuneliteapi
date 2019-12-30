const Printer = require('./printer');
const NeptuneLiteUser = require('./neptuneliteuser');
const {EFontTypeAscii, EFontTypeExtCode} = require('./entity');

Object.assign(exports, {
    Printer : Printer.getInstance(NeptuneLiteUser.getInstance().getDal().getPrinter()),
    EFontTypeAscii,
    EFontTypeExtCode
});
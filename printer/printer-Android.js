/*globals requireClass */
/**
 * Smartface Printer class is wrapper for NeptuneLiteUserApi's Printer component.
 * @module Printer
 * @type {object}
 * @author Muhammed Yalcin Kuru <yalcin.kuru@smartface.io>
 * @copyright Smartface 2020
 */
const NativePrinter = requireClass('com.pax.dal.IPrinter');

/**
 * 
 * This class is a singleton component. It provides properties for initializing ,printing and modifiying the structure of output.
 *
 * @public
 * @class
 * @example
 * 
 */
class Printer {
    constructor(_printerInstance){
        this.nativeObject = _printerInstance;
    }

	/**
	 * Gets singleton Printer object.
	 * @method
	 * @param {object}
	 * @public
	 */
    static getInstance(printer) {
        return this.nativeObject ? this.nativeObject : new Printer(printer);
    }

    /**
	 * Initilize with given assignes.
	 * @method
	 * @public
	 */
    init() {
        this.nativeObject.init();
    }

    /**
	 * Sets font type.
	 * @property {object} params
     * @property {object} params.asciiFontType
     * @property {object} params.cFontType
	 * @public
	 */
    set fontSet(params = {}) {
        this.nativeObject.fontSet(params.asciiFontType,params.cFontType);
    }

    /**
	 * Sets space for word & line.
	 * @property {object} params
     * @property {object} params.wordSpace
     * @property {object} params.lineSpace
	 * @public
	 */
    set spaceSet(params) {
        this.nativeObject.spaceSet(params.wordSpace,params.lineSpace);
    }

    /**
	 * Sets steps.
	 * @property {number} b
	 * @public
	 */
    set step(b) {
        this.nativeObject.step(b);
    }

    /**
	 * Sets print string&charset
	 * @property {object} params
     * @property {object} params.str
     * @property {object} params.charset
	 * @public
	 */
    set printStr(params) {
        this.nativeObject.printStr(params.str, params.charset);
    }

    
    set printBitmap(bitmap) {
        this.nativeObject.printBitmap(bitmap);
    }

    set printBitmapWithMonoThreshold(bitmap, threshold) {
        this.nativeObject.printBitmapWithMonoThreshold(bitmap, threshold);
    }

    /**
	 * Starts printing.
	 * @method
	 * @public
	 */
    start() {
        return this.nativeObject.start();
    }

    //Returns status int
    get status() {
        return this.nativeObject.getStatus();
    }

    set leftIndent(indent) {
        this.nativeObject.leftIndent(indent);
    }

    //Handle exception case
    get dotLine() {
       return this.nativeObject.getDotLine();
    }

    set gray(level) {
        this.nativeObject.setGray(level);
    }

    //Boolean,Boolean
    set doubleWidth(isAscDouble, isLocalDouble) {
        this.nativeObject.doubleWidth(isAscDouble, isLocalDouble);
    }

     //Boolean,Boolean
    set doubleHeight(isAscDouble, isLocalDouble) {
        this.nativeObject.doubleHeight(isAscDouble, isLocalDouble);
    }
    
    //Boolean
    set invert(isInvert) {
        this.nativeObject.invert(isInvert);
    }

    //int
    set cutPaper(mode) {
        this.nativeObject.cutPaper(mode);
    }

    //int
    get cutMode() {
        return this.nativeObject.getCutMode();
    }

    print(bitmap) {
        return new Promise( (resolve,reject) => {
            let callback = IPrinter.IPinterListener.implement({
                onSucc: function(){
                    resolve();
                },
                onError: function(status){
                    reject(status);
                }
            });
            this.nativeObject.print(bitmap, callback);
        })
    }

    print(bitmap, threshold) {
        return new Promise( (resolve,reject) => {
            let callback = IPrinter.IPinterListener.implement({
                onSucc: function(){
                    resolve();
                },
                onError: function(status){
                    reject(status);
                }
            });
            this.nativeObject.print(bitmap,threshold, callback);
        })

    }

    set fontPath(path) {
        this.nativeObject.setFontPath(path);
    }

}

module.exports = exports = Printer;
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
    return this.singletonObj = this.singletonObj ? 
        this.singletonObj : 
        new Printer(printer);
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
     * @property {number} params.wordSpace
     * @property {number} params.lineSpace
	 * @public
	 */
    set spaceSet(params = {}) {
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

    /**
	 * Sets image
	 * @property {UI.Image} image
     * @see {@link http://ref.smartface.io/#!/api/UI.Image  Image component}
	 * @public
	 */
    set printBitmap(image) {
        this.nativeObject.printBitmap(image.nativeObject.getBitmap());
    }

    /**
	 * Sets image by threshold
     * @property {object} params
	 * @property {UI.Image} params.image
     * @property {number} params.threshold
     * @see {@link http://ref.smartface.io/#!/api/UI.Image  Image component}
	 * @public
	 */
    set printBitmapWithMonoThreshold(params = {}) {
        this.nativeObject.printBitmapWithMonoThreshold(params.image.nativeObject.getBitmap(), params.threshold);
    }

    /**
	 * Starts printing.
	 * @method
	 * @public
	 */
    start() {
        return this.nativeObject.start();
    }


     /**
	 * Gets status
     * @returns {number}
     * @see {@link http://ref.smartface.io/#!/api/UI.Image  Image component}
	 * @public
	 */
    get status() {
        return this.nativeObject.getStatus();
    }


     /**
	 * Sets left indent 
     * @property {number} indent
	 * @public
	 */
    set leftIndent(indent) {
        this.nativeObject.leftIndent(indent);
    }

    //ToDo: Handle exception case
    /**
	 * Gets dot line
     * @returns {number}
	 * @public
	 */
    get dotLine() {
       return this.nativeObject.getDotLine();
    }


    /**
	 * Sets gray level
     * @property {number} level
	 * @public
	 */
    set gray(level) {
        this.nativeObject.setGray(level);
    }

    /**
	 * Sets double width
	 * @property {object} params
     * @property {Boolean} params.isAscDouble
     * @property {Boolean} params.isLocalDouble
	 * @public
	 */
    set doubleWidth(params = {}) {
        this.nativeObject.doubleWidth(params.isAscDouble, params.isLocalDouble);
    }

    /**
	 * Sets double height
	 * @property {object} params
     * @property {Boolean} params.isAscDouble
     * @property {Boolean} params.isLocalDouble
	 * @public
	 */
    set doubleHeight(params = {}) {
        this.nativeObject.doubleHeight(params.isAscDouble, params.isLocalDouble);
    }
    
    /**
	 * Enble/Disable invert
     * @property {Boolean} isInvert
	 * @public
	 */
    set invert(isInvert) {
        this.nativeObject.invert(isInvert);
    }

    /**
	 * Sets cut paper mode
     * @property {number} mode
	 * @public
	 */
    set cutPaper(mode) {
        this.nativeObject.cutPaper(mode);
    }

    /**
	 * Gets cut mode
     * @returns {number}
	 * @public
	 */
    get cutMode() {
        return this.nativeObject.getCutMode();
    }

    /**
	 * Asynchronous Print Image
	 * @method
	 * @param {UI.Image}
     * @returns {Promise}
     * @see {@link http://ref.smartface.io/#!/api/UI.Image  Image component}
	 * @public
	 */
    print(image) {
        return new Promise( (resolve,reject) => {
            let callback = NativePrinter.IPinterListener.implement({
                onSucc: function(){
                    resolve();
                },
                onError: function(status){
                    reject(status);
                }
            });
            this.nativeObject.print(image.nativeObject.getBitmap(), callback);
        })
    }

    /**
	 * Asynchronous Print Image by threshold
	 * @method
	 * @param {UI.Image} image
     * @param {number} threshold
     * @returns {Promise}
	 * @public
	 */
    printWithThreshold(image,threshold) {
        return new Promise( (resolve,reject) => {
            let callback = NativePrinter.IPinterListener.implement({
                onSucc: function(){
                    resolve();
                },
                onError: function(status){
                    reject(status);
                }
            });
            this.nativeObject.print(image.nativeObject.getBitmap(),threshold, callback);
        })
    }

     /**
	 * Sets absolute font path
     * @property {string} path
	 * @public
	 */
    set fontPath(path) {
        this.nativeObject.setFontPath(path);
    }
}
module.exports = exports = Printer;
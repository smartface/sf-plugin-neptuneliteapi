/*globals requireClass */
const NativePrinter = requireClass('com.pax.dal.IPrinter');

class Printer {
    constructor(_printerInstance){
        this.nativeObject = _printerInstance;
    }

    static getInstance(printer) {
        return this.nativeObject ? this.nativeObject : new Printer(printer);
    }

    init() {
        this.nativeObject.init();
    }

    set fontSet(asciiFontType, cFontType) {
        this.nativeObject.fontSet(asciiFontType,cFontType);
    }

    set spaceSet(wordSpace, lineSpace) {
        this.nativeObject.spaceSet(wordSpace,lineSpace);
    }

    set step(b) {
        this.nativeObject.step(b);
    }

    set printStr(srt, charSet) {
        this.nativeObject.printStr(str, charset);
    }

    set printBitmap(bitmap) {
        this.nativeObject.printBitmap(bitmap);
    }

    set printBitmapWithMonoThreshold(bitmap, threshold) {
        this.nativeObject.printBitmapWithMonoThreshold(bitmap, threshold);
    }

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
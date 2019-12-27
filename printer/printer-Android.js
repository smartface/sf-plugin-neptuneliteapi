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

    fontSet(EFontTypeAscii, EFontTypeExtCode) {

    }

    spaceSet(byte1, byte2) {
        
    }

    step(var1) {

    }

    printStr(var1, var2) {
        
    }

    printBitmap(bitmap) {
        
    }

    printBitmapWithMonoThreshold(Bitmap var1, int var2) {
        
    }

    start() {
        
    }

    getStatus() {
        
    }

    leftIndent(int var1) {
        
    }

    getDotLine() {
        
    }

    setGray(int var1) {
        
    }

    doubleWidth(boolean var1, boolean var2) {
        
    }

    doubleHeight(boolean var1, boolean var2) {
        
    }

    invert(boolean var1) {
        
    }

    cutPaper(int var1) {
        
    }

    getCutMode() {
        
    }

    print(Bitmap var1, IPrinter.IPinterListener var2) {

    }

    print(Bitmap var1, int var2, IPrinter.IPinterListener var3) {

    }

    setFontPath(String var1) {
        
    }

}

module.exports = exports = Printer;
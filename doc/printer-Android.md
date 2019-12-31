<a name="module_Printer"></a>

## Printer : <code>object</code>
Smartface Printer class is wrapper for NeptuneLiteUserApi's Printer component.

**Author**: Muhammed Yalcin Kuru <yalcin.kuru@smartface.io>  
**Copyright**: Smartface 2020  

* [Printer](#module_Printer) : <code>object</code>
    * [~Printer](#module_Printer..Printer)
        * _instance_
            * [.fontSet](#module_Printer..Printer+fontSet)
            * [.spaceSet](#module_Printer..Printer+spaceSet)
            * [.step](#module_Printer..Printer+step)
            * [.printStr](#module_Printer..Printer+printStr)
            * [.printBitmap](#module_Printer..Printer+printBitmap)
            * [.printBitmapWithMonoThreshold](#module_Printer..Printer+printBitmapWithMonoThreshold)
            * [.status](#module_Printer..Printer+status) ⇒ <code>number</code>
            * [.leftIndent](#module_Printer..Printer+leftIndent)
            * [.dotLine](#module_Printer..Printer+dotLine) ⇒ <code>number</code>
            * [.gray](#module_Printer..Printer+gray)
            * [.doubleWidth](#module_Printer..Printer+doubleWidth)
            * [.doubleHeight](#module_Printer..Printer+doubleHeight)
            * [.invert](#module_Printer..Printer+invert)
            * [.cutPaper](#module_Printer..Printer+cutPaper)
            * [.cutMode](#module_Printer..Printer+cutMode) ⇒ <code>number</code>
            * [.fontPath](#module_Printer..Printer+fontPath)
            * [.init()](#module_Printer..Printer+init)
            * [.start()](#module_Printer..Printer+start)
            * [.print(image)](#module_Printer..Printer+print) ⇒ <code>Promise</code>
            * [.printWithThreshold(image, threshold)](#module_Printer..Printer+printWithThreshold) ⇒ <code>Promise</code>
        * _static_
            * [.getInstance(printer)](#module_Printer..Printer.getInstance)

<a name="module_Printer..Printer"></a>

### Printer~Printer
This class is a singleton component. It provides properties for initializing ,printing and modifiying the structure of output.

**Kind**: inner class of [<code>Printer</code>](#module_Printer)  
**Access**: public  

* [~Printer](#module_Printer..Printer)
    * _instance_
        * [.fontSet](#module_Printer..Printer+fontSet)
        * [.spaceSet](#module_Printer..Printer+spaceSet)
        * [.step](#module_Printer..Printer+step)
        * [.printStr](#module_Printer..Printer+printStr)
        * [.printBitmap](#module_Printer..Printer+printBitmap)
        * [.printBitmapWithMonoThreshold](#module_Printer..Printer+printBitmapWithMonoThreshold)
        * [.status](#module_Printer..Printer+status) ⇒ <code>number</code>
        * [.leftIndent](#module_Printer..Printer+leftIndent)
        * [.dotLine](#module_Printer..Printer+dotLine) ⇒ <code>number</code>
        * [.gray](#module_Printer..Printer+gray)
        * [.doubleWidth](#module_Printer..Printer+doubleWidth)
        * [.doubleHeight](#module_Printer..Printer+doubleHeight)
        * [.invert](#module_Printer..Printer+invert)
        * [.cutPaper](#module_Printer..Printer+cutPaper)
        * [.cutMode](#module_Printer..Printer+cutMode) ⇒ <code>number</code>
        * [.fontPath](#module_Printer..Printer+fontPath)
        * [.init()](#module_Printer..Printer+init)
        * [.start()](#module_Printer..Printer+start)
        * [.print(image)](#module_Printer..Printer+print) ⇒ <code>Promise</code>
        * [.printWithThreshold(image, threshold)](#module_Printer..Printer+printWithThreshold) ⇒ <code>Promise</code>
    * _static_
        * [.getInstance(printer)](#module_Printer..Printer.getInstance)

<a name="module_Printer..Printer+fontSet"></a>

#### printer.fontSet
Sets font type.

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| params | <code>object</code> | 
| params.asciiFontType | <code>object</code> | 
| params.cFontType | <code>object</code> | 

<a name="module_Printer..Printer+spaceSet"></a>

#### printer.spaceSet
Sets space for word & line.

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| params | <code>object</code> | 
| params.wordSpace | <code>number</code> | 
| params.lineSpace | <code>number</code> | 

<a name="module_Printer..Printer+step"></a>

#### printer.step
Sets steps.

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| b | <code>number</code> | 

<a name="module_Printer..Printer+printStr"></a>

#### printer.printStr
Sets print string&charset

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| params | <code>object</code> | 
| params.str | <code>object</code> | 
| params.charset | <code>object</code> | 

<a name="module_Printer..Printer+printBitmap"></a>

#### printer.printBitmap
Sets image

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**See**: [ Image component](http://ref.smartface.io/#!/api/UI.Image)  
**Properties**

| Name | Type |
| --- | --- |
| image | <code>UI.Image</code> | 

<a name="module_Printer..Printer+printBitmapWithMonoThreshold"></a>

#### printer.printBitmapWithMonoThreshold
Sets image by threshold

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**See**: [ Image component](http://ref.smartface.io/#!/api/UI.Image)  
**Properties**

| Name | Type |
| --- | --- |
| params | <code>object</code> | 
| params.image | <code>UI.Image</code> | 
| params.threshold | <code>number</code> | 

<a name="module_Printer..Printer+status"></a>

#### printer.status ⇒ <code>number</code>
Gets status

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**See**: [ Image component](http://ref.smartface.io/#!/api/UI.Image)  
<a name="module_Printer..Printer+leftIndent"></a>

#### printer.leftIndent
Sets left indent

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| indent | <code>number</code> | 

<a name="module_Printer..Printer+dotLine"></a>

#### printer.dotLine ⇒ <code>number</code>
Gets dot line

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
<a name="module_Printer..Printer+gray"></a>

#### printer.gray
Sets gray level

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| level | <code>number</code> | 

<a name="module_Printer..Printer+doubleWidth"></a>

#### printer.doubleWidth
Sets double width

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| params | <code>object</code> | 
| params.isAscDouble | <code>Boolean</code> | 
| params.isLocalDouble | <code>Boolean</code> | 

<a name="module_Printer..Printer+doubleHeight"></a>

#### printer.doubleHeight
Sets double height

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| params | <code>object</code> | 
| params.isAscDouble | <code>Boolean</code> | 
| params.isLocalDouble | <code>Boolean</code> | 

<a name="module_Printer..Printer+invert"></a>

#### printer.invert
Enble/Disable invert

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| isInvert | <code>Boolean</code> | 

<a name="module_Printer..Printer+cutPaper"></a>

#### printer.cutPaper
Sets cut paper mode

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| mode | <code>number</code> | 

<a name="module_Printer..Printer+cutMode"></a>

#### printer.cutMode ⇒ <code>number</code>
Gets cut mode

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
<a name="module_Printer..Printer+fontPath"></a>

#### printer.fontPath
Sets absolute font path

**Kind**: instance property of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**Properties**

| Name | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="module_Printer..Printer+init"></a>

#### printer.init()
Initilize with given assignes.

**Kind**: instance method of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
<a name="module_Printer..Printer+start"></a>

#### printer.start()
Starts printing.

**Kind**: instance method of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
<a name="module_Printer..Printer+print"></a>

#### printer.print(image) ⇒ <code>Promise</code>
Asynchronous Print Image

**Kind**: instance method of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  
**See**: [ Image component](http://ref.smartface.io/#!/api/UI.Image)  

| Param | Type |
| --- | --- |
| image | <code>UI.Image</code> | 

<a name="module_Printer..Printer+printWithThreshold"></a>

#### printer.printWithThreshold(image, threshold) ⇒ <code>Promise</code>
Asynchronous Print Image by threshold

**Kind**: instance method of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  

| Param | Type |
| --- | --- |
| image | <code>UI.Image</code> | 
| threshold | <code>number</code> | 

<a name="module_Printer..Printer.getInstance"></a>

#### Printer.getInstance(printer)
Gets singleton Printer object.

**Kind**: static method of [<code>Printer</code>](#module_Printer..Printer)  
**Access**: public  

| Param | Type |
| --- | --- |
| printer | <code>object</code> | 


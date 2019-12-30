Object.assign(exports, {
    EFontTypeAscii : global.Device.deviceOS === "Android" ? require('./efonttypeascii') : undefined,
    EFontTypeExtCode : global.Device.deviceOS === "Android" ?  require('./efonttypeextcode') : undefined
});
/*globals requireClass */
const NativeEFontTypeAscii = requireClass('com.pax.dal.entity.EFontTypeAscii');

/**
 * Enum for EFontTypeAscii values.
 * @readonly
 * @enum {number}
 */
const EFontTypeAscii = {
    FONT_8_16 : 0,
    /** @deprecated */
    FONT_16_24 : 1,
    FONT_12_24 : 1,
    FONT_8_32 : 2,
    /** @deprecated */
    FONT_16_48 : 3,
    FONT_12_48 : 3,
    FONT_16_16 : 4,
    /** @deprecated */
    FONT_32_24 : 5,
    FONT_24_24 : 5,
    FONT_16_32 : 6,
    /** @deprecated */
    FONT_32_48 : 7,
    FONT_24_48 : 7,
};
Object.freeze(EFontTypeAscii);

module.exports = EFontTypeAscii;
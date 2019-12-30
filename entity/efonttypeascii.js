/*globals requireClass */
const NativeEFontTypeAscii = requireClass('com.pax.dal.entity.EFontTypeAscii');

/**
 * Enum for EFontTypeAscii values.
 * @readonly
 * @enum {number}
 */
const EFontTypeAscii = {
    FONT_8_16 : NativeEFontTypeAscii.FONT_8_16,
    /** @deprecated */
    FONT_16_24 : NativeEFontTypeAscii.FONT_16_24,
    FONT_12_24 : NativeEFontTypeAscii.FONT_12_24,
    FONT_8_32 : NativeEFontTypeAscii.FONT_8_32,
    /** @deprecated */
    FONT_16_48 : NativeEFontTypeAscii.FONT_16_48,
    FONT_12_48 : NativeEFontTypeAscii.FONT_12_48,
    FONT_16_16 : NativeEFontTypeAscii.FONT_16_16,
    /** @deprecated */
    FONT_32_24 : NativeEFontTypeAscii.FONT_32_24,
    FONT_24_24 : NativeEFontTypeAscii.FONT_24_24,
    FONT_16_32 : NativeEFontTypeAscii.FONT_16_32,
    /** @deprecated */
    FONT_32_48 : NativeEFontTypeAscii.FONT_32_48,
    FONT_24_48 : NativeEFontTypeAscii.FONT_24_48,
};
Object.freeze(EFontTypeAscii);

module.exports = EFontTypeAscii;
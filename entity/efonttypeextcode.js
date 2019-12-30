/*globals requireClass */
const NativeEFontTypeExtCode = requireClass('com.pax.dal.entity.EFontTypeExtCode');

/**
 * Enum for EFontTypeExtCode values.
 * @readonly
 * @enum {number}
 */
const EFontTypeExtCode = {
    FONT_16_16 : NativeEFontTypeExtCode.FONT_16_16,
    FONT_24_24 : NativeEFontTypeExtCode.FONT_24_24,
    FONT_16_32 : NativeEFontTypeExtCode.FONT_16_32,
    FONT_24_48 : NativeEFontTypeExtCode.FONT_24_48,
    FONT_32_16 : NativeEFontTypeExtCode.FONT_32_16,
    FONT_48_24 : NativeEFontTypeExtCode.FONT_48_24,
    FONT_32_32 : NativeEFontTypeExtCode.FONT_32_32,
    FONT_48_48 : NativeEFontTypeExtCode.FONT_48_48,
};
Object.freeze(EFontTypeExtCode);

module.exports = EFontTypeExtCode;
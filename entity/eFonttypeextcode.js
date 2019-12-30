/*globals requireClass */
const NativeEFontTypeExtCode = requireClass('com.pax.dal.entity.EFontTypeExtCode');

/**
 * Enum for EFontTypeExtCode values.
 * @readonly
 * @enum {number}
 */
const EFontTypeExtCode = {
    FONT_16_16 : 0,
    FONT_24_24 : 1,
    FONT_16_32 : 2,
    FONT_24_48 : 3,
    FONT_32_16 : 4,
    FONT_48_24 : 5,
    FONT_32_32 : 6,
    FONT_48_48 : 7,
};
Object.freeze(EFontTypeExtCode);

module.exports = EFontTypeExtCode;
/*globals requireClass */
const NativeNeptuneLiteUser = requireClass('com.pax.neptunelite.api.NeptuneLiteUser');

class NeptuneLiteUser {
    static getInstance() {
        return NativeNeptuneLiteUser.getInstance();
    }
}
module.exports = exports = NeptuneLiteUser;
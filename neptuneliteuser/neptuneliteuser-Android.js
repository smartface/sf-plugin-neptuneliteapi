/*globals requireClass */
/**
 * Smartface NeptuneLiteUser class is wrapper for NeptuneLiteUserApi's NeptuneLiteUser component.
 * @module NeptuneLiteUser
 * @type {object}
 * @author Muhammed Yalcin Kuru <yalcin.kuru@smartface.io>
 * @copyright Smartface 2020
 */
const NativeNeptuneLiteUser = requireClass('com.pax.neptunelite.api.NeptuneLiteUser');
const AndroidConfig = require('sf-core/util/Android/androidconfig');

/**
 * 
 * This class is a singleton component. It provides properties for get IDAL object.
 *
 * @public
 * @class
 */
class NeptuneLiteUser {

     constructor(_neptuneLiteUserInstance){
        this.nativeObject = _neptuneLiteUserInstance;
    }

    static getInstance() {
        return this.singletonObj = this.singletonObj ?
            this.singletonObj :
            new NeptuneLiteUser(NativeNeptuneLiteUser.getInstance());
    }

    /**
	 * Gets IDAL object
	 * @method
     * @returns {IDAL}
	 * @public
	 */
    getDal(){
        return this.nativeObject.getDal(AndroidConfig.activity);
    }
}
module.exports = exports = NeptuneLiteUser;
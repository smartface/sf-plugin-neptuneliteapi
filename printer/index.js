module.exports = global.Device.deviceOS === "Android" ? require('./printer-Android') : undefined;
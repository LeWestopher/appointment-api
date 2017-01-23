const Bluebird = require('bluebird');

export function error(error, code = 500) {
    return Bluebird.resolve({
        success: false,
        error,
        code
    });
}

export function success(data, code = 200) {
    console.log('in success.');
    return Bluebird.resolve({
        success: true,
        data,
        code
    });
}

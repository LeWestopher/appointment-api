export function error(error, code = 500) {
    return {
        success: false,
        error,
        code
    };
}

export function success(data, code = 200) {
    return {
        success: true,
        data,
        code
    };
}

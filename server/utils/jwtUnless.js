const nonTokenApiArr = [
    '/api',
    '/api/Homepage',
    '/api/Outreach',
    '/api/Activities',
    '/api/About'
];

const isNonTokenApi = (path) => {
    return nonTokenApiArr.includes(path)
};


const checkisNonTokenApi = (ctx) => {
    if(isNonTokenApi(ctx.path) && ctx.method == 'Get') {
        return true;
    }
    if(ctx.path == '/user/login' || ctx.path == '/user/register') {
        return true;
    }
    return false;
}

module.exports = {
    checkisNonTokenApi,
    isNonTokenApi
}
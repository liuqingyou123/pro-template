const path = require('path');

const proxy = require(path.join(__dirname, 'config', 'proxy'));

exports.default = () => ({
    devServer: {
        proxy: proxy.default,
    },
});

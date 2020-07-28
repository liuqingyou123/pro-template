const bypass = (req, res) => {
    if (req.headers.accept.indexOf('html') !== -1) {
        return '/index.html';
    }
};

exports.default = {
    '/': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        bypass,
    },
};

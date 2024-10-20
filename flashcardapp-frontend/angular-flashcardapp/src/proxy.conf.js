// This file diverts HTTP calls for http://localhost:4200/api to the
// backend server on http://localhost:8080
const PROXY_CONFIG = [
    {
      context: ['/api'],
      target: 'http://localhost:8080/',
      secure: false,
      pathRewrite: { '^/api': '' }
    }
];

module.exports = PROXY_CONFIG;
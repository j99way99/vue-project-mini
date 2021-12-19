//const target = 'http://127.0.0.1:3000';
const target = 'http://localhost:3000';

module.exports = {
  devServer: {
    //port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true
      },
      '^/upload': {
        target,
        changeOrigin: true,
      },
      '^/download': {
        target,
        changeOrigin: true,
      }
    }
  }

  // proxyTable: {
  // '/api': {
  //   target: 'http://localhost:3000',
  //   changeOrigin: true,
  //   pathRewrite: {
  //     '^/api': ''
  //   }
  // }
// },
}
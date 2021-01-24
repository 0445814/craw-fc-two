module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/craw-fc-two/' : '/',
  transpileDependencies: [
    'vuetify',
  ],
}

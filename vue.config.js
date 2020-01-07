// module.exports = {
//     publicPath: 'dsc', //this was key to making Github Pages work
//     outputDir: 'docs'
//     } 
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dsc/'
    : '/',
  outputDir: 'docs'

}
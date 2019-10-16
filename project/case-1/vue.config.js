const port = 9090;
const title = '项目实践';
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/',
    devServer: {
        port
    },
    configureWebpack: {
        name: title
    },
    chainWebpack(config) {
        // 1、让已有svgloader排除掉icons目录
        config.module.rule('svg')
            .exclude.add(resolve('src/assets/icons'))
        
        // 2、新增svg-sprite-loader
        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons')).end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({symbolId:'icon-[name]'})
    }
}
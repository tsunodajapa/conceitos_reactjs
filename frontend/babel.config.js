module.exports = {
    presets: [
        '@babel/preset-env', // converte apenas as funcionalidades que o browser ainda não conhece
        '@babel/preset-react' // adiciona as funcionalidades do react na conversão
    ],
    plugins:[
        '@babel/plugin-transform-runtime'
    ]
}
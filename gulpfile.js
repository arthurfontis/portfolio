const {series, parallel} = require('gulp')
const gulp = require('gulp')

const{appHtml, appCss, appJs, appImg} = require('./gulpTasks/app')
const{monitorarArquivos, servidor} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(series(appHtml, appCss, appJs, appImg)),
    servidor,
    monitorarArquivos
)
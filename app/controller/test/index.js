const logger = require('../../logger');
const fs = require('fs');
const request = require('request')
function *test(){
    this.set('Access-Control-Allow-Origin','*');

    const self = this;

    var fileUrl  = "http://www.zhangjinkms.com:52/Vue 深圳平安-3028013.pdf";
    var storedFileName = 'file'+'-'+(Math.round((Math.random())*100000000)).toString()+'.pdf';  //文件名
    logger.info(storedFileName);
    var result = ''
    var stream = fs.createWriteStream(`app/static/${storedFileName}`);
    const filePath = yield (new Promise(function (resolve, reject) {
    request(encodeURI(fileUrl)).pipe(stream).on('close', function (err) {
        console.log("文件[" + storedFileName + "]下载完毕");
       resolve(storedFileName)
    });

        }).then(function (filePath) {
                // console.log('result', JSON.stringify(result))

                return filePath
            })
    )
    var data = {
        '文件下载成功':filePath,
    }
    this.body=data;
}

module.exports = test;
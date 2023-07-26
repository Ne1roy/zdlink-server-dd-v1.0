/**
 * Created by zj on 2020/3/13
 * 获取文件地址
 */
const axios = require('axios');
const logger = require('../../../logger');
const env = require('../../../env');
const MsgServer_HOST = env.MsgServer_HOST[env.scheme];

function * fileview(){
    logger.info(JSON.stringify(this.request.body));
    this.set('Access-Control-Allow-Origin','*')
    const requestParams=JSON.stringify(this.request.body)

    const sendRequest = {
        method:'post',
        url: MsgServer_HOST+'/zdlinkapp/workshop/fileview',
        data:requestParams
    };
    const sendRequestResponse = yield axios(sendRequest).then(function(response){
        logger.info(response.data);
        var result = response.data;
        //根据服务器返回的文件地址下载文件到本地服务器，替换掉文件路径，返回文件名，前端添加服务器地址即可浏览文件
        var fileUrl  = response.data.chSuccess;
        var storedFileName = 'file'+'-'+(Math.round((Math.random())*1000000000)).toString()+'.pdf';  //文件名
        var stream = fs.createWriteStream(`app/static/${storedFileName}`);
        const filePath =  new Promise(function (resolve, reject) {
                request(encodeURI(fileUrl)).pipe(stream).on('close', function (err) {
                    console.log("文件[" + storedFileName + "]下载完毕");
                    resolve(storedFileName)
                });

            }).then(function (storedFileName) {
                return storedFileName
            })
        result.chSuccess = filePath
        logger.info(result);
        return result;

    }).catch(function(err){

        logger.log('error','request bad');
        return {
            errcode: 500,
            errmsg: 'request bad',
            error: err
        }
    });

    this.body = sendRequestResponse;

}

/*
* url 网络文件地址
* filename 文件名
* callback 回调函数
*/
function downloadFile(uri,storedFileName,callback){
    var stream = fs.createWriteStream(`app/static/${storedFileName}.pdf`);
    request(uri).pipe(stream).on('close', function (err) {
        console.log("文件[" + fileName + "]下载完毕");
    });
}


module.exports = fileview;



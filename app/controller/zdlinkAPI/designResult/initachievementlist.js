/**
 * Created by zj on 2018/9/20
 * 接收前端请求，向服务器获取收到的消息并返回给前端
 * https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.UFI1hy&treeId=385&articleId=37692&docType=2
 */
const axios = require('axios');
const logger = require('../../../logger');
const env = require('../../../env');
const MsgServer_HOST = env.MsgServer_HOST[env.scheme];

function * initachievementlist(){
    logger.info(JSON.stringify(this.request.body));
    this.set('Access-Control-Allow-Origin','*')
    const requestParams=JSON.stringify(this.request.body)

    const sendRequest = {
        method:'post',
        url: MsgServer_HOST+'/zdlinkapp/workshop/initachievementlist',
        data:requestParams
    };
    const sendRequestResponse = yield axios(sendRequest).then(function(response){
        logger.info(response.data);
        return response.data;

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
module.exports = initachievementlist;



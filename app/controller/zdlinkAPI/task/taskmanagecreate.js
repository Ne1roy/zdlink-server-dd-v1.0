/**
 * Created by zj on 2018/9/20
 * 接收前端请求，向服务器获取收到的消息并返回给前端
 * https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.UFI1hy&treeId=385&articleId=37692&docType=2
 */
const axios = require('axios');
const logger = require('../../../logger');
const env = require('../../../env');
const agent_id = env.agent_id;
const MsgServer_HOST = env.MsgServer_HOST[env.scheme];
const getAccessToken = require('../../DingDing/request/getAccessToken');

function *taskmanagecreate(){
    logger.info(JSON.stringify(this.request.body));
    this.set('Access-Control-Allow-Origin','*')
    const accessTokenResponse = yield getAccessToken();
    const requestParams=JSON.stringify(this.request.body)

    const sendRequest = {
        method:'post',
        url: MsgServer_HOST+'/zdlinkapp/workshop/taskmanagecreate',
        data:requestParams.params,
    };
    const sendRequestResponse = yield axios(sendRequest).then(function(response){
        logger.info(response.data);
        const responseMsg = new Promise(function(resolve,reject){
            var msgParams = {
                method : 'post',
                url:'https://oapi.dingtalk.com/topapi/message/corpconversation/asyncsend_v2?access_token='+accessTokenResponse.access_token,
                data:{
                    agent_id :agent_id,
                    userid_list:requestParams.userId,
                    msg :{
                        "msgtype": "link",
                        "link": {
                            "messageUrl": requestParams.urlTime,
                            "picUrl":"@lALOACZwe2Rk",
                            "title": "收到一个新的任务",
                            "text": "点击查看"
                        }
                    }
                }

            };

            axios(msgParams).then(function(response){
                logger.info(response.data);
                resolve(response)
            }).catch(function(err){
                logger.log('error','request bad');
                const response= {
                    errcode: 500,
                    errmsg: 'request bad',
                    error: err
                }
                resolve(response)
            })

        }).then(function(response){
            if(response.data.errcode == 0){
                console.log('success',response.data)
                return {
                    Output1:'', Output2:'', Output3:'', chSuccess:'成功'
                }
            }else{
                console.log('failure',response.data)
                return {
                    Output1:'', Output2:'', Output3:'', chSuccess:'失败'
                }
            }

        })


        return responseMsg;

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
module.exports = taskmanagecreate;



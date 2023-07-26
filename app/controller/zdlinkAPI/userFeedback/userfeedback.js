

/**
 * Created by zj on 2018/9/20
 * 接收前端请求，向服务器获取收到的消息并返回给前端
 * https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.UFI1hy&treeId=385&articleId=37692&docType=2
 */
const axios = require('axios');
const logger = require('../../../logger');
const env = require('../../../env');
const MsgServer_HOST = env.MsgServer_HOST[env.scheme];

function * userfeedback(){
    logger.info(JSON.stringify(this.request.body));
    this.set('Access-Control-Allow-Origin','*')
    const requestParams=JSON.stringify(this.request.body)

    const sendRequest = {
        method:'post',
        //url: 'http://www.cattery.zhangjinkms.com:3000/api/zdlinkapp/workshop/userFeedback',
        url:'https://cattery.zhangjinkms.com:18081/api/zdlinkapp/workshop/userfeedback',
        data:requestParams
    };
    const sendRequestResponse = yield axios(sendRequest).then(function(response){
        logger.info(response.data);
        return response.data;

    }).catch(function(err){/**
     * Created by zj on 2018/9/20
     * 接收前端请求，向服务器获取收到的消息并返回给前端
     * https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.UFI1hy&treeId=385&articleId=37692&docType=2
     */
    const axios = require('axios');
        const logger = require('../../../logger');
        const db = require('../../../database.js')

        function* userfeedback() {
            var req={};
            logger.info(JSON.stringify(this.request.body));
            this.set('Access-Control-Allow-Origin', '*')
            const requestParams = this.request.body
            switch(this.request.body.operation){
                case 'add':add(this.request.body) ;break;
                case 'query':  console.log('eeee:'+JSON.stringify(req));req=querydata(); break;
                default:add(this.request.body);break;
            }
            console.log('req:'+JSON.stringify(req))
            this.body=req;

        }
        function add(request){
            //获取当前日期与时间
            const timestamp = new Date().toLocaleString()
            const post = {
                username: request.username,
                content: request.content,
                contact: request.contact,
                type: request.type,
                images: request.images,
                time: timestamp,
                isdelete: 0,

            };
            const addSql = 'INSERT INTO feedback SET ?';
            var sendRequestResponse={}
            db.query(addSql, post, function (response) {
                console.log('response' + JSON.stringify(response))
                if (response.affectedRows <= 0) {
                    sendRequestResponse= {
                        reqCode: 404
                    }
                } else {
                    sendRequestResponse= {
                        reqCode: 200
                    }
                }
            })
            this.body = sendRequestResponse;
        }
        function querydata(){
            const self=this;
            const querySql = 'select * from feedback';
            db.query(querySql,[],function(response){
                console.log('response:' + JSON.stringify(response))

            })
        }

        module.exports = userfeedback;




        logger.log('error','request bad');
        return {
            errcode: 500,
            errmsg: 'request bad',
            error: err
        }
    });

    this.body = sendRequestResponse;

}
module.exports = userfeedback;



const config = {

    //DingDing
    CorpID: 'ding725c6f3122826456ee0f45d8e4f7c288',
    appkey:'dingqnb5q6flmtcndntv',
    appsecret:'XidG2R63pEwMqxA9CVSi6eYd53AFAeW3xwf8BDQUkiaeoywTZNQ2l90Rq-b-OjRC',
    agent_id:'2621335026',
    OAPI_HOST: {
        release: 'https://oapi.dingtalk.com'

    },

    MsgServer_HOST:{
        release: 'http://10.189.250.191:8003'
    },

    scheme: 'release',
    connect: {
        beta: 'mongodb://127.0.0.1:27017/tokentable',
        release: 'mongodb://127.0.0.1:27017/tokentable'
    },


};

if (process.env.NODE_ENV !== 'product') {
    config.scheme = 'release';
}

module.exports = config;

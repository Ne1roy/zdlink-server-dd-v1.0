/**
 * Created by zj on 2018/9/12.
 */

const router = require('koa-router')();
const jsapiOAuth = require('../controller/DingDing/OAuth');
const getUserInfo = require('../controller/DingDing/getUserInfo');
const get = require('../controller/DingDing/get');
const microApps = require('../controller/DingDing/microapps');


router.prefix('/api');
router.get('/jsapi-oauth',jsapiOAuth);
router.get('/get-user-info',getUserInfo);
router.get('/get',get);
router.get('/get-microapp-list',microApps);
/**
 * file
 * created by zj
 * */
const fileview = require('../controller/zdlinkAPI/file/fileview');
/**
 * message
 * created by cmq
 * */
const initrecmsg = require('../controller/zdlinkAPI/message/initrecmsg');
const initsendmsg = require('../controller/zdlinkAPI/message/initsendmsg');
const initsystemmsg = require('../controller/zdlinkAPI/message/initsystemmsg');
const initwarningmsg = require('../controller/zdlinkAPI/message/initwarningmsg');
const readmsg = require('../controller/zdlinkAPI/message/readmsg');
const sendmsg = require('../controller/zdlinkAPI/message/sendmsg');
const replymsg = require('../controller/zdlinkAPI/message/replymsg');
const deletemsg = require('../controller/zdlinkAPI/message/deletemsg');
/**
 * designResult
 * created by cmq
 * */
const initachievementcata = require('../controller/zdlinkAPI/designResult/initachievementcata');
const initachievementcount = require('../controller/zdlinkAPI/designResult/initachievementcount');
const initachievementlist = require('../controller/zdlinkAPI/designResult/initachievementlist');

/**
 * task
 * created by wcl
 * */
const inittaskmsg = require('../controller/zdlinkAPI/task/inittaskmsg');
const inittaskdetail = require('../controller/zdlinkAPI/task/inittaskdetail');
const taskmanagecreate = require('../controller/zdlinkAPI/task/taskmanagecreate');
const taskmanagedelete = require('../controller/zdlinkAPI/task/taskmanagedelete');
const taskmanagechange = require('../controller/zdlinkAPI/task/taskmanagechange');
const taskmanagealloc = require('../controller/zdlinkAPI/task/taskmanagealloc');
const taskmanagestart = require('../controller/zdlinkAPI/task/taskmanagestart');
const taskmanagetransfer = require('../controller/zdlinkAPI/task/taskmanagetransfer');
const taskmanagecommit = require('../controller/zdlinkAPI/task/taskmanagecommit');

/**
* process
* created by zj
* */
const initstartupflowbrief = require('../controller/zdlinkAPI/process/initstartupflowbrief');
const initstartupflowdetails = require('../controller/zdlinkAPI/process/initstartupflowdetails');
const initneeddealflowbrief = require('../controller/zdlinkAPI/process/initneeddealflowbrief');
const initneeddealflowdetails = require('../controller/zdlinkAPI/process/initneeddealflowdetails');
const initdoneflowbrief = require('../controller/zdlinkAPI/process/initdoneflowbrief');
const initdoneflowdetails = require('../controller/zdlinkAPI/process/initdoneflowdetails');
const initneedbatchbrief = require('../controller/zdlinkAPI/process/initneedbatchbrief');
const initneedbatchdetails = require('../controller/zdlinkAPI/process/initneedbatchdetails');
const processpass = require('../controller/zdlinkAPI/process/processpass');
const processunpass = require('../controller/zdlinkAPI/process/processunpass');
const checkprocessinfo = require('../controller/zdlinkAPI/process/checkprocessinfo');
const batchdoc = require('../controller/zdlinkAPI/process/batchdoc');


const userfeedback = require('../controller/zdlinkAPI/userFeedback/userfeedback');

/**
 * project
 * created by yjx
 * */
const initprojecttrendstype = require('../controller/zdlinkAPI/project/initprojecttrendstype');
const initprojecttrendsproject = require('../controller/zdlinkAPI/project/initprojecttrendsproject');
const initprojecttrendstask = require('../controller/zdlinkAPI/project/initprojecttrendstask');

const test =require('../controller/test');

/**
 * file
 * created by zj
 * */
router.post('/zdlinkapp/workshop/fileview',fileview);
/**
 * message
 * created by cmq
 * */
router.post('/zdlinkapp/workshop/initrecmsg',initrecmsg);
router.post('/zdlinkapp/workshop/initsendmsg',initsendmsg);
router.post('/zdlinkapp/workshop/initsystemmsg',initsystemmsg);
router.post('/zdlinkapp/workshop/initwarningmsg',initwarningmsg);
router.post('/zdlinkapp/workshop/readmsg',readmsg);
router.post('/zdlinkapp/workshop/sendmsg',sendmsg);
router.post('/zdlinkapp/workshop/replymsg',replymsg);
router.post('/zdlinkapp/workshop/deletemsg',deletemsg);
/**
 * designResult
 * created by cmq
 * */
router.post('/zdlinkapp/workshop/initachievementcata',initachievementcata);
router.post('/zdlinkapp/workshop/initachievementcount',initachievementcount);
router.post('/zdlinkapp/workshop/initachievementlist',initachievementlist);

/**
 * task
 * created by wcl
 * */
router.post('/zdlinkapp/workshop/inittaskmsg',inittaskmsg);
router.post('/zdlinkapp/workshop/inittaskdetail',inittaskdetail);
router.post('/zdlinkapp/workshop/taskmanagecreate',taskmanagecreate);
router.post('/zdlinkapp/workshop/taskmanagedelete',taskmanagedelete);
router.post('/zdlinkapp/workshop/taskmanagechange',taskmanagechange);
router.post('/zdlinkapp/workshop/taskmanagealloc',taskmanagealloc);
router.post('/zdlinkapp/workshop/taskmanagestart',taskmanagestart);
router.post('/zdlinkapp/workshop/taskmanagetransfer',taskmanagetransfer);
router.post('/zdlinkapp/workshop/taskmanagecommit',taskmanagecommit);
/**
 * process
 * created by zj
 * */
router.post('/zdlinkapp/workshop/initstartupflowbrief',initstartupflowbrief);
router.post('/zdlinkapp/workshop/initstartupflowdetails',initstartupflowdetails);
router.post('/zdlinkapp/workshop/initneeddealflowbrief',initneeddealflowbrief);
router.post('/zdlinkapp/workshop/initneeddealflowdetails',initneeddealflowdetails);
router.post('/zdlinkapp/workshop/initdoneflowbrief',initdoneflowbrief);
router.post('/zdlinkapp/workshop/initdoneflowdetails',initdoneflowdetails);
router.post('/zdlinkapp/workshop/initneedbatchbrief',initneedbatchbrief);
router.post('/zdlinkapp/workshop/initneedbatchdetails',initneedbatchdetails);
router.post('/zdlinkapp/workshop/processpass',processpass);
router.post('/zdlinkapp/workshop/processunpass',processunpass);
router.post('/zdlinkapp/workshop/checkprocessinfo',checkprocessinfo);
router.post('/zdlinkapp/workshop/batchdoc',batchdoc);



router.post('/zdlinkapp/workshop/userfeedback',userfeedback);
/**
 * project
 * created by yjx
 * */
router.post('/zdlinkapp/workshop/initprojecttrendstype',initprojecttrendstype);
router.post('/zdlinkapp/workshop/initprojecttrendsproject',initprojecttrendsproject);
router.post('/zdlinkapp/workshop/initprojecttrendstask',initprojecttrendstask);

router.get('/test',test);
module.exports = router;

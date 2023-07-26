
const querystring = require('querystring');
const url = require('url');
const axios = require('axios');
const logger = require('../../logger');
const env = require('../../env');
const fs = require('fs');
const request = require('request')
const getAccessToken = require('../../request/getAccessToken');
const OAPI_HOST = env.OAPI_HOST[env.scheme];
const FILE_HOST = env.FILE_HOST;


function *upload(){
    this.set('Access-Control-Allow-Origin','*');
    const files = this.request.files;
    //console.log(files)
    const req = this.request.body;
    //console.log(req)
    const fileName = req.fileName.split('.')[0]; //文件名
    //console.log('name',fileName)
    for (let key in files) {
        const file = files[key];

       // console.log(file.path)
        const reader = fs.createReadStream(file.path); // 创建可读流
        const ext = file.name.split('.').pop(); // 获取上传文件扩展名
        const storedFileName = fileName+'-'+(Math.round((Math.random())*100000000)).toString()
        //console.log('storedFileName',storedFileName)
        const upStream = fs.createWriteStream(`app/static/${storedFileName}.${ext}`); // 创建可写流

        reader.pipe(upStream); // 可读流通过管道写入可写流
        return this.body = FILE_HOST + storedFileName + '.' + ext;
    }
   // const file = this.request.body.files.file; // 获取上传文件




}

module.exports = upload;

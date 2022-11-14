const expressServer = require('express')();
const { Router } = require('express');
const router = new Router();
// 引入文件模块 
const fs = require("fs")
const http = require('http')
const bodyParser = require('body-parser')
// const cors = require('cors')
// expressServer.use(cors({
//       origin: ['http://172.22.1.166:8002'],//可设置多个跨域域名
//       credentials: true//允许客户端携带验证信息
// }))
// use方法： 既能解析get方式也能解析post方式
// 后台接口：  /method
router.use('/method', function (req, res) {
    res.send('use...')
})

// 后台接口：  /get_method   只能解析get方式
router.get('/get_method', function (req, res) {

    res.send({ getMsg: 'get_method...' })
})


// 后台接口：  /post_method   只能解析post方式
router.post('/post_method', function (req, res) {
    // res.sendStatus(300)
    console.log(res)
    res.send({
        msg: 'post数据'
    })
})


//新闻列表接口
router.get('/newslist', function (request, response) {
    response.send({
        status: '1',
        msg: 'success',
        listdata: [
            { newsnum: 1, newstitle: '新闻1', newsdes: '新闻描述1' },
            { newsnum: 2, newstitle: '新闻2', newsdes: '新闻描述2' },
            { newsnum: 3, newstitle: '新闻3', newsdes: '新闻描述3' },
        ]
    })
})

//默认数据列表接口
router.get('/list', function (request, response) {
    response.send({
        status: '1',
        msg: 'success',
        data: [
            { newsnum: 1, newstitle: '数据1', newsdes: '数据描述1' },
            { newsnum: 2, newstitle: '数据2', newsdes: '数据描述2' },
            { newsnum: 3, newstitle: '数据3', newsdes: '数据描述3' },
        ]
    })
})

//获取token数据接口
router.post('/token', function (request, response) {
    response.send({
        status: '1',
        msg: 'success',
        token: '123457',
    })
})

router.get('/getDoc', (req, res) => {

    // 假设我们的word文档文件就存放在这个doc目录里面
    let docxUrl = './ceshi.docx'
    // let docxUrl = './n.ofd'
    // 微笑：）不要生气
    // let docxUrl = './try.docx'
    // let docxUrl = "C:/Users/Admin/Desktop/消防题库V1.0.docx"

    // 允许跨域
    res.header("Access-Control-Allow-Origin", "*");

    // 设置请求头
    res.writeHead(200, {
        // 指定文件类型为docx
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    })

    //创建可读流
    let readStream = fs.createReadStream(docxUrl)

    // 将读取的结果以管道pipe流的方式返回给前端
    readStream.pipe(res);

})
// // 写入文件内容（如果文件不存在会创建一个文件）
// // 传递追加参数{'flag':'a'}
// fs.writeFile('./try.docx', 'HelloWorld', { 'flag': 'a' }, function (err) {
//     if (err) {
//         throw err;
//     }

//     console.log('11111')

//     // 写入成功后读取测试
//     fs.readFile('./try.docx', 'utf-8', function (err, data) {
//         if (err) {
//             throw err;
//         }
//         console.log(data)
//     })
// })

expressServer.use(router)
expressServer.use(bodyParser.urlencoded({ extended: false }))
expressServer.use(bodyParser.json())

expressServer.listen(9000, function () {
    console.log('express服务器启动...');
})




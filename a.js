// 引入文件模块 
const fs = require("fs")
const expressServer = require('express')();
const { Router } = require('express');
const route = new Router();

// 返回word文件接口
route.get('/getDoc', (req, res) => {
    console.log('789787979');
    // 假设我们的word文档文件就存放在这个doc目录里面
    let docxUrl = './try.docx'

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

// 后台接口：  /get_method   只能解析get方式
route.get('/get_method', function (req, res) {

    res.send({ getMsg: 'get_method...' })
})

// let fs = require('fs'); // 引入fs模块

// 写入文件内容（如果文件不存在会创建一个文件）
// 传递追加参数{'flag':'a'}
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

expressServer.use(route)
expressServer.listen(8080, function () {
    console.log('express服务器启动...');
})
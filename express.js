const expressServer = require('express')();
const { Router } = require('express');
const router = new Router();

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


expressServer.use(router)
expressServer.use(bodyParser.urlencoded({ extended: false }))
expressServer.use(bodyParser.json())

expressServer.listen(9000, function () {
      console.log('express服务器启动...');
})




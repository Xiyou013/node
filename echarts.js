const expressServer = require('express')();
const { Router } = require('express');
const router = new Router();

const bodyParser = require('body-parser')
// const cors = require('cors')
// expressServer.use(cors({
//       origin: ['http://172.22.1.166:8002'],//可设置多个跨域域名
//       credentials: true//允许客户端携带验证信息
// }))

const attribute = [
      { id: 1, type: 'WIND', name: '风' },
      { id: 2, type: 'ROCK', name: '岩' },
      { id: 3, type: 'RAY', name: '雷' },
      { id: 4, type: 'FIRE', name: '火' },
      { id: 5, type: 'WATER', name: '水' },
      { id: 6, type: 'GRASS', name: '草' },
      { id: 7, type: 'ICE', name: '冰' },
]
const personList = [
      { id: 1, type: 'WIND', name: '温迪' },
      { id: 2, type: 'ROCK', name: '钟离' },
      { id: 3, type: 'WATER', name: '芭芭拉' },
      { id: 4, type: 'WATER', name: '11' },
]


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

//默认菜单数据列表接口
router.get('/meauList', function (request, response) {
      response.send({
            status: '1',
            msg: 'success',
            data: [
                  { id: 1, title: '菜单一', path: '/two-first' },
                  { id: 2, title: '菜单二', path: '/three-first' },
                  { id: 3, title: '菜单三', path: '/four-first' },
                  { id: 4, title: '菜单四', path: '/one-first' },
                  { id: 5, title: '菜单五', path: '/404' },
            ]
      })
})

//人物数据列表接口
router.get('/personList', function (request, response) {
      response.send({
            status: '1',
            msg: 'success',
            data: personList
      })
})
//属性数据列表接口
router.get('/typeList', function (request, response) {
      response.send({
            status: '1',
            msg: 'success',
            data: attribute
      })
})
router.get('/oneecharts', (request, response) => {
      response.send({
            status: '200',
            msg: 'success',
            data: {
                  0: [
                        500, 800, 500, 200, 505, 700, 900, 700, 505, 600, 800, 905, 800, 700, 500, 40, 60, 75, 70, 60,
                        40, 35, 60, 20
                  ],
                  1: [
                        0, 20, 40, 58, 62, 50, 35, 55, 60, 70, 75, 65, 50, 40, 50, 70, 80, 95, 80, 60, 55, 70, 90, 70
                  ],
            }
      })
})
router.get('/twoecharts', (request, response) => {
      response.send({
            status: '200',
            msg: 'success',
            data: {
                  0: [320, 332, 301, 334, 390, 330, 320],
                  1: [120, 132, 101, 134, 90, 230, 210],
                  2: [220, 182, 191, 234, 290, 330, 310],
                  3: [150, 232, 201, 154, 190, 330, 410],
            }
      })
})
router.get('/threeecharts', (request, response) => {
      response.send({
            status: '200',
            msg: 'success',
            data: {
                  0: [
                        500, 800, 500, 200, 505, 700, 900, 700, 505, 600, 800, 905, 800, 700, 500, 600, 800, 750, 700, 600,
                        40, 35, 60, 20
                  ],
                  1: [
                        0, 20, 40, 58, 62, 50, 35, 55, 60, 70, 75, 65, 50, 40, 50, 70, 80, 95, 80, 60, 55, 70, 90, 70
                  ],
            }
      })
})


expressServer.use(router)
expressServer.use(bodyParser.urlencoded({ extended: false }))
expressServer.use(bodyParser.json())

expressServer.listen(8000, function () {
      console.log('express服务器启动...');
})




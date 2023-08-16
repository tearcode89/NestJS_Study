import * as express from 'express';
import catsRouter from './cats/cats.route';

const app: express.Express = express();
const port: number = 9000;

//* logging middleware
app.use((req, res, next) => {
    console.log(req.rawHeaders[1]);
    console.log('이 지점은 로깅을 담당하는 미들웨어가 작동되고 있는 부분입니다.')
    next()
})

//* json middleware
app.use(express.json())

app.use(catsRouter);

//* 404 middleware
app.use((req, res, next) => {
    console.log('이 미들웨어는 에러처리를 담당해요')
    res.send({ error: '404 not found error'})
})

app.listen(port, () => {
    console.log(`예제의 앱은 http://localhost:${port}를 구동하고 있어요~ 🤞`)
})

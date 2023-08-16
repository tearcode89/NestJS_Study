import * as express from 'express';
import { Cat, CatType} from "./app.model";

const app: express.Express = express();
const port: number = 9000;

app.use((req, res, next) => {
    console.log('이 지점은 로깅을 담당하는 미들웨어가 작동되고 있는 부분입니다.')
    next()
})

app.get('/cats/som', (req,res,next) => {
    console.log(req.rawHeaders[1])
    console.log('이 미들웨어는 som 미들웨어 입니다.')
    next()
})

app.get('/', (req: express.Request, res: express.Response) => {
    res.send({ cats: Cat })
})

app.get('/cats/blue', (req,res, next: express.NextFunction) => {
    res.send({ cats:Cat, blue: Cat[0] })
})

app.get('/cats/som', (req,res) => {
    res.send({ som:Cat, blue: Cat[1] })
})

app.use((req,res,next) => {
    console.log('이 미들웨어는 에러처리를 담당해요')
    res.send({ error: '404 not found error'})
})

app.listen(port, () => {
    console.log(`예제의 앱은 http://localhost:${port}를 구동하고 있어요~ 🤞`)
})

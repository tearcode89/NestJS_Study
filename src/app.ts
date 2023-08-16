import * as express from 'express';
import { Cat, CatType} from "./app.model";

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

//* READ 고양이 전체 데이터 다 조회하기
app.get('/cats', (req,res) => {
    try {
        const cats = Cat;
        // throw new Error('db connect error')
        res.status(200).send({
            success: true,
            data: {
                cats,
            }
        })
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(400).send({
                success: false,
                error: error.message,
            })
        }
    }
})

//* READ 특정 고양이 데이터 조회
app.get('/cats/:id', (req,res) => {
    try {
        const params = req.params;
        console.log(params)
        const cat = Cat.find((cat) => {
            return cat.id === params.id
        });
        // throw new Error('db connect error')
        res.status(200).send({
            success: true,
            data: {
                cat,
            }
        })
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(400).send({
                success: false,
                error: error.message,
            })
        }
    }
})

//* CREATE 새로운 고양이 추가 api
app.post('/cats', (req,res) => {
    try{
        const data = req.body;
        console.log(data);
        Cat.push(data)
        res.status(200).send({
            success: true,
            data: { data }
        })
    } catch(error: unknown) {
        if(error instanceof Error){
            res.status(400).send({
                success: false,
                error: error.message
            })
        }
    }
})

//* 404 middleware
app.use((req,res,next) => {
    console.log('이 미들웨어는 에러처리를 담당해요')
    res.send({ error: '404 not found error'})
})

app.listen(port, () => {
    console.log(`예제의 앱은 http://localhost:${port}를 구동하고 있어요~ 🤞`)
})

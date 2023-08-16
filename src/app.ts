import * as express from 'express';

const app: express.Express = express();
const port: number = 9000;

app.get('/', (req: express.Request, res: express.Response) => {
    console.log(req)
    res.send({ name: 'Jun', age: 256, friends: ['피카츄', '라이츄', '파이리', '꼬부기'] })
})

app.post('/test', (req,res) => {
    res.send({person: 'KangIn Lee'})
})

app.listen(port, () => {
    console.log(`예제의 앱은 http://localhost:${port}를 구동하고 있어요~ 🤞`)
})

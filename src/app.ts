import * as express from 'express';
import catsRouter from './cats/cats.route';

class Server {
    public app: express.Application

    constructor() {
        const app: express.Application = express()
        this.app = app;
    }

    private setRoute() {
        this.app.use(catsRouter);
    }

    private setMiddleware(){
        //* logging middleware
        this.app.use((req, res, next) => {
            console.log(req.rawHeaders[1]);
            console.log('이 지점은 로깅을 담당하는 미들웨어가 작동되고 있는 부분입니다.')
            next()
        })

        //* json middleware
        this.app.use(express.json())

        this.setRoute()

        //* 404 middleware
        this.app.use((req, res, next) => {
            console.log('이 미들웨어는 에러처리를 담당해요')
            res.send({ error: '404 not found error'})
        })
    }

    public listen() {
        this.setMiddleware()
        this.app.listen(9000, () => {
            console.log(`예제의 앱은 http://localhost:9000을(를) 구동하고 있어요~ 🤞`)
        })
    }
}

function init() {
    const server = new Server();
    server.listen();
}

init();





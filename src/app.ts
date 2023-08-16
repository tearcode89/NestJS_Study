import * as express from 'express';
import { Cat, CatType} from "./app.model";

const app: express.Express = express();
const port: number = 9000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send({ cats: Cat })
})

app.listen(port, () => {
    console.log(`예제의 앱은 http://localhost:${port}를 구동하고 있어요~ 🤞`)
})

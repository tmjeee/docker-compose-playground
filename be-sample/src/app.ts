import * as mariadb from "mariadb";
import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(cors())
app.use('/test', [
    async (req: Request, res: Response, next: NextFunction) => {
        const conn = await mariadb.createConnection({
            host: 'mariadb',
            user: 'root',
            password: 'root',
            port: 3306,
        });

        const r = await conn.query('USE mysql;')
        console.log(r);
        res.status(200).json({
            status: 'ok',
            message: r.toString()
        })
    }
])

app.listen(8888, () => {
    console.log('APP (REST) Running');
});



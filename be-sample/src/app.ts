import * as mariadb from "mariadb";
import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';
import * as util from 'util';

const app = express();

app.use(cors())
app.use('/check', [
    async (req: Request, res: Response, next: NextFunction) => {
        console.log('**** REQ /check');
        res.status(200).json({
            status: 'ok',
            message: `Hello ${new Date()}`
        })
    }
])
app.use('/test', [
    async (req: Request, res: Response, next: NextFunction) => {
        const config = await import( './config.json');
        console.log('**** REQ /test', config);
        const conn = await mariadb.createConnection({
            host: config.dbHost,
            user: config.dbUsername,
            password: config.dbPassword,
            port: config.dbPort,
        });
        const r = await conn.query('USE mysql;')
        console.log(r);
        res.status(200).json({
            status: 'ok',
            message: util.inspect(r, {depth: 10})
        })
    }
])

app.listen(8888, () => {
    console.log('APP (REST) Running');
});



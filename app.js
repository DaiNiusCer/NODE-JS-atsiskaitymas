import cookieParser from 'cookie-parser';
import 'dotenv/config';
import express from 'express'
import path from 'path'
import usersRouter from './routes/api/users.js'
//Moduliai

//Konstantos
const PORT = process.env.PORT1 || 8080;
const app = express();
//Konstantos

//View engine EJS nustatymai
app.set('views', path.join('views'));
app.set('view engine', 'ejs')
//View engine EJS nustatymai

//Papildomi nustatymai
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser())
//Papildomi nustatymai

//Papildomų aplankų nurodymas
app.use(express.static('public'))

//Router nurodymas
app.use('/api/users', usersRouter)
//Router nurodymas

//Serverio paleidimas
app.listen(PORT, console.log(`*** Server is ON ${PORT} PORT ***`))
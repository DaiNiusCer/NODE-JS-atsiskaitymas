import cookieParser from 'cookie-parser';
import 'dotenv/config';
import express from 'express';
import path from 'path';
import usersRouter from './routes/api/users.js';
import blogsRouter from './routes/api/blog.js';
import blogsuiRouter from './routes/ui/home.js';
import registerRouter from './routes/ui/regsiter.js'
//Moduliai

//Konstantos
const PORT = process.env.PORT1 || 8080;
const app = express();
//Konstantos

//View engine EJS nustatymai
app.set('views', path.join('views'));
app.set('view engine', 'ejs');
//View engine EJS nustatymai

//Papildomi nustatymai
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
//Papildomi nustatymai

//Papildomų aplankų nurodymas
app.use(express.static('public'));

//Router nurodymas
app.use('/api/users', usersRouter);
app.use('/api/blog', blogsRouter);
app.use('/home', blogsuiRouter);
app.use('/register', registerRouter);
//Router nurodymas

//Serverio paleidimas
app.listen(PORT, console.log(`*** Server is ON ${PORT} PORT ***`))
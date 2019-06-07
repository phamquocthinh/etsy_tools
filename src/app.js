import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session'
import cors from 'cors'

import { open } from './db/mongoDB'
import index from './routes/index'
import user from './routes/user'
import token from './routes/token'
import dashboard from './routes/dashboard'
import product from './routes/product'
import image from './routes/image'
import item from './routes/item'
import amzImg from './routes/amz-img'
import keyword from './routes/keyword'
import mockup from './routes/mockup'
import account from './routes/account'

let app = express()
open()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

let corsOptions = {
  origin: '*',
  preflightContinue: true
}

app.use(cors(corsOptions))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
  secret: 'sessionSecret',
  resave: true,
  saveUninitialized: true
}))

app.use('/user', user)

app.use((req, res, next) => {
	// do logging
    const sess = req.session
	if (!sess.USER) {
		return res.redirect('/user/login')
	}
	next() // make sure we go to the next routes and don't stop here
})

app.use('/', index)
app.use('/token', token)
app.use('/dashboard', dashboard)
app.use('/product', product)
app.use('/image', image)
app.use('/item', item)
app.use('/amz-img', amzImg)
app.use('/keyword', keyword)
app.use('/mockup', mockup)
app.use('/account', account)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  return res.render('error', { message: 'error' })
})

module.exports = app

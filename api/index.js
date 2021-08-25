require('dotenv').config()

const path = require('path');
const cors = require('cors');
const logger = require('morgan-body');
const { v4: uuidv4 } = require('uuid');
const createError = require('http-errors');
const rfs = require('rotating-file-stream')

const express = require('express')
const app = express()
const port = 3000

const router = require('../routes/index');
const routerV1 = require('../routes/v1/index');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create a rotating write stream
const accessLogStream = rfs.createStream('api-access.log', {
  interval: '1d', // Rotate daily
  path: path.join(__dirname, 'logs')
})

function assignId (req, res, next) {
  const traceId = uuidv4()
  req.id = traceId
  res.set({'traceId': traceId })
  next()
}

app.use(assignId)

logger(app, {
  noColors: true,
  prettify: false,
  logRequestId: true,
  includeNewLine: true,
  dateTimeFormat: 'iso',
  logAllReqHeader: true,
  logReqHeaderList: true,
  logResHeaderList: true,
  stream: accessLogStream,
})

app.use('/', router);
app.use('/api/v1', routerV1);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
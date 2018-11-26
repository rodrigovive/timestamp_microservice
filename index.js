const express = require('express')
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const app = express();
const timestampRouter = require('./routes/timestampRouter')()
const timestampController = require('./controllers/timestampController')()
app.use(morgan('tiny'));

const port = process.env.PORT || 3000;

app.use('/api',timestampRouter)

app.listen(port,() => {
  // console.log(process.env)
  debug(`listening on node port ${chalk.green(port)}`);
})
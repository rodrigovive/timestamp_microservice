const express = require('express')

const timestampController = require('../controllers/timestampController')()

const timestampRouter = express.Router();

function router() {

  const { getDateString, getDateCurrent } = timestampController;

  timestampRouter.get('/timestamp', getDateCurrent);

  timestampRouter.get('/timestamp/:dateString', getDateString);

  return timestampRouter;
}

module.exports = router;
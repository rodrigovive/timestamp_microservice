const timestampController = () => {

  const resJSON = (dateString) => {

    return {

      'unix': dateString.getTime(),

      'utc': dateString.toUTCString(),

    };

  };

  const getDateString = (req, res) => {

    const {dateString} = req.params;

    const dateParsed = new Date(Number.parseInt(dateString));

    console.dir(dateParsed, { depth: 0});

    if (dateParsed == 'Invalid Date') {
      res.json({
        'error': 'Invalid Date',
      });

    } else {
      res.json(resJSON(dateParsed));

    }

  };

  const getDateCurrent = (req, res) => {

    const dateString = new Date();

    res.json(resJSON(dateString));

  };

  return {
    getDateString,
    getDateCurrent,
  };

};

module.exports = timestampController;
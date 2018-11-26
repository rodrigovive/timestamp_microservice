const timestampController = () => {

  const getDateString = (req,res) => {

    const { dateString } = req.params;

    const resJSON = {
      string: dateString
    }

    res.json(resJSON);

  }

  const getDateCurrent = (req,res) => {



  }

  return {
    getDateString,
    getDateCurrent
  }

}

module.exports = timestampController;
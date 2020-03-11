const { promisify } = require('util');

const HidraService = require('../services/hidra');

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    HidraService.loginUser({ user: { email, password } }, (err, response) => {
      if (err) { 
        console.log(err) 
      } else {
        console.log(response);
      }
    })
    /*
    const response = await promisify(HidraService.loginUser)({ user: { email, password } });
   
    return res.json(response)*/
  }
}

module.exports = new SessionController();
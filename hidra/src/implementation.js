const User = require('./models/User');

module.exports = {
  async getUserById(call, callback) {
    const { id } = call.request;

    const user = await User.findById(id);

    if (!user) {
      return callback({ error: 'User not found'});
    }

    return callback(null, { user: { ...user, id: user._id } });
  },

  async registerUser(call, callback) {
    const { email, useranme, password } = call.request.user;

    const user = await User.create({ email, useranme, password });

    return callback(null, { user: { ...user, id: user._id } });
  },

  async loginUser(call, callback) {
    const { email, password } = call.request.user;
    
    const user = await User.findOne({ email });

    if (!user) {
      return callback({ error: 'User not found'});
    }

    if(!(await User.compareHash(password))) {
      return callback({ error: 'Invalid password' });
    } 

    return callback(null, {
      token: User.generateToken(user),
    });
  }
}
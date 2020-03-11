const mongoose = require("mongoose");

// Initialize connection with db
mongoose.connect('mongodb+srv://joao:qLvrZv7deK3t20rq@cluster0-dtzkd.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

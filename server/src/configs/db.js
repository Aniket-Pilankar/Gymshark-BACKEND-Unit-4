const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect('mongodb+srv://gymshark:gymshark123@cluster0.10vvu.mongodb.net/Gymshark_Unit4?retryWrites=true&w=majority')
}

module.exports = connect
const mongoose = require('mongoose')

let todoSchema = new mongoose.Schema({
  title: {
    type: String
  },
  isComplete: {
    type: String
  },
  note: {
    type: String
  }
})

module.exports = mongoose.model('Todo', todoSchema)

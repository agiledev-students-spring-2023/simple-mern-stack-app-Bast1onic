const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutmeSchema = new Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
)

// create mongoose Model
const AboutMe = mongoose.model('AboutMe', aboutmeSchema)

// export the model so other modules can import it
module.exports = {
  AboutMe
}

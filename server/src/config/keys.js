require("dotenv").config();

const user = process.env.USER
const pass = process.env.PASSWORD
module.exports = {
    mongoURI: `mongodb+srv://${user}:${pass}@first-cluster.hb5cr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
}
const response = require("./../utils/response")

// Possible error names
const errorNames = ["ValidationError", "SyntaxError"]

module.exports = (app) => {
     app.use("*", (req, res) => {
          res.status(400).send(response("Invalid request", null, false));
     });

     app.use((error, req, res, next) => {
          if (error.name == "CustomError") {
               res.status(error.status).send(response(error.message, null, false));
          }
          else if (errorNames.includes(error.name)) {
               res.status(400).send(response(error.message, null, false));
          }
          else {
               res.status(500).send(response(error.message, null, false));
          }
     });

     return app
}
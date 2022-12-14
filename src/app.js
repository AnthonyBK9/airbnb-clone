//* Dependencias
const express = require("express");
const passport = require("passport");
require("./middleware/auth.middleware")(passport);
const path = require('path')
const initModels = require('./models/initModels')
const generateData = require('./utils/defaultData');
//*Archivos de rutas
const userRouter = require("./users/users.router").router;
const authRouter = require("./auth/auth.router").router;

const {db} = require('./utils/database')

//* Configuraciones iniciales
const app = express();
initModels();

db.authenticate()
  .then(() => console.log('Database Authenticated'))
  .catch(err => console.log(err))

  if(process.env.NODE_ENV === 'production') {
    db.sync()
      .then(() => {console.log('Database synced')
      generateData()
      })
      .catch(err => console.log(err))
  } else {
    db.sync({force: true})
      .then(() => {console.log('Database synced')
      generateData()
      })
      .catch(err => console.log(err))
  }



//? Esta configuracion es para habilitar el req.body
app.use(express.json());



app.get("/", (req, res) => {
  res.status(200).json({ message: "All ok!" });
});
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

app.get("/api/v1/uploads/:imgName", (req ,res) => {
  const imgName = req.params.imgName;
  res.status(200).sendFile(path.resolve('uploads/') + '/' +imgName)
})

app.get("/ejemplo",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res
      .status(200)
      .json({
        message: "Felicidades, tienes credenciales para entrar aqui",
        email: req.user.email,
      });
  }
);

app.listen(8000, () => {
  console.log("Server started at port 8000");
});

exports.default = app
exports.app = app
module.exports = app
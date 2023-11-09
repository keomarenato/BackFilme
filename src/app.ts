require("dotenv").config()
import express from 'express'
import config from 'config'

const app = express()

//JSON middlware
app.use(express.json())

//DB
import db from '../config/db'

// Routes 
import router from './router'

// Loger 
import Logger from '../config/logger'

app.use("/api/", router)

// app port
const port = config.get<number>('port')

app.listen(port, async()=> {
  await db()
  console.log("Conectado com sucesso")
})
import mongoose, { mongo } from "mongoose";
import config from 'config'
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri")

  try {
    await mongoose.connect(dbUri)
   console.log("Connectou ao banco de dados")
  } catch (error) {
    console.log('Não foi possível conectar')
    console.log(`Error ${error}`)
  }
}

export default connect
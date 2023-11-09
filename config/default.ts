const dbUser = process.env.DB_USER,
dbPassword = process.env.DB_PASS
export default {
  port: 3000,
  dbPassword:process.env.DB_PASS,
  dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.n0uzjjp.mongodb.net/filmes?retryWrites=true&w=majority`,
  env: "development"
}
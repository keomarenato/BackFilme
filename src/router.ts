import {Router, Request, Response} from "express"
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from "./controllers/movieController"
// import { validate } from "./middleware/handleValidation"
import { movieCreateValidation } from "./middleware/MovieValidation"

const router = Router()


export default router.get("/test", (req: Request, res: Response)=> {
  res.status(200).send("Api working")
})
.post("/movie", movieCreateValidation(), createMovie)
.get("/movie/:id", findMovieById)
.get("/movie/", getAllMovies)
.delete("/movie/:id", removeMovie)
.patch("/movie/:id",movieCreateValidation(), updateMovie)
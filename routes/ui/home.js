import express from "express";
import connect from "../../mySQLcon.js";


const router = express.Router()

router.get('/', async (req, res) => {
  try {
    let rikiuotiPagal = req.query.rikiuotiPagal;
    let kokiaTvarkaRikiuoti = req.query.rikiavimas;

    if (rikiuotiPagal === undefined || rikiuotiPagal === "null") {
      rikiuotiPagal = "id"
    } else {
      rikiuotiPagal = req.query.rikiuotiPagal
    }

    if (kokiaTvarkaRikiuoti === "mazejanti") {
      kokiaTvarkaRikiuoti = "DESC"
    } else {
      kokiaTvarkaRikiuoti = "ASC"
    }


    const [data] = await connect.query(`SELECT blog.id,blog.title,blog.content FROM blogs.blog ORDER BY ${rikiuotiPagal} ${kokiaTvarkaRikiuoti}`);
    res.render('home', { blogs: data, title: "Our's all content" })
  } catch (err) {
    console.log("Error home page ui")
    res.send({ err: `Error: ${err}` })
  }
})


export default router
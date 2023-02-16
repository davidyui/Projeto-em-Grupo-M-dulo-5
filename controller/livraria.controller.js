const pool = require('../database/index')
const livroController = {
    getALL: async (req, res) =>{
        try{
            const [rows, fields] = await 
            pool.query("select * from livros")
            res.json({ data: rows })
        }catch(error){
            console.log(error)
        }
    },
    getById: async (req, res) => {
        try{
            const {id} = req.params
            const [rows, fields] = await 
            pool.query("select * from livros where id = ?",[id])
            res.json({ data: rows })
        }catch(error){
                comsole.log(error)
        }
    },
    create: async (req, res) => { 
        try{
            const {modelo, ano} = req.body
            const sql = "insert into livros (titulo, autor, preco) values (?,?,?)"
            const [rows, field] = await 
            pool.query(sql, [modelo, ano])
            res.json({ data: rows })
        }catch(error){
            console.log(error)
        }
    },
    update: async (req, res) => { 
        try{
            const {modelo, ano} = req.body
            const {id} = req.params
            const sql = "update livros set titulo = ?, autor = ?, preco = ? where id = ?"
            const [rows, field] = await 
            pool.query(sql, [modelo, ano, id])
            res.json({ data: rows })
        }catch(error){
            console.log(error)
            res.json({ status: "error" })
        }

     },
     delete: async (req, res) => { 
        try{
                const {id} = req.params
                const sql = "delete from livros where id = ?"
                const [rows, field] = await 
                pool.query(sql, [id])
                res.json({ data: rows })
        }catch(error){
            console.log(error)
            res.json({ status: "error" })
        }

      }

}

module.exports = livroController






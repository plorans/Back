import {pool} from '../db.js';

const getUsuario = async (req,res) =>{
    try{
        const {id} = req.params;
        const usuario = await pool.query(`SELECT * FROM USUARIO WHERE ID = ${id}`);
        res.json(usuario.rows)
        // res.send("Dame un unsiaro");
    }catch(error){
        console.log(error);
    }
};

const saveUsuario = async (req,res) =>{
    try{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const nombre = urlParams.get('nombre');
        const password = urlParams.get('password');
        const email = urlParams.get('email');
        // const {nombre} = req.params;
        // const {password} = req.params;
        // const {email} = req.params;
        const usuario = await pool.query(`INSERT INTO USUARIO (NOMBRE,PASSWORD,ACTIVO,EMAIL) VALUES(${nombre},${password},True,${email})`)
        res.json(usuario.rows)
    }catch(error){
        console.log(error);
    }
};

const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("HOLAAAAA")
        console.log(    (req.body));
        const { nombre, password, email } = req.body;
        await pool.query(`UPDATE USUARIO SET NOMBRE = '${nombre}', PASSWORD = '${password}', EMAIL = '${email}' WHERE ID = '${id}'`);
        res.send("Usuario actualizado");
        //res.send("Dame un usuario");
    } catch (e) {
        console.log(e);
    }
};

const borrarUsuario = async (req, res) => {
    const { id } = req.params
    const usuario = await pool.query(`DELETE FROM USUARIO WHERE ID = ${id}`);
    res.send("Borrar un usuario");
};

const listUsuario  = async (req,res) =>{
    try{
        const lista = await pool.query("SELECT * FROM USUARIO");
        res.json(lista.rows)
        // res.send("Dame un unsiaro");
    }catch(error){
        console.log(error);
    }
};

export {
    getUsuario,
    saveUsuario,
    updateUsuario,
    borrarUsuario,
    listUsuario
};
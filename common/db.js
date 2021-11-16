import mysql from "mysql"

export const connection = mysql.createConnection({
    host : '192.168.8.37',
    user : 'ofertas',
    password: 'ofertas',
    database: 'ofertas' 
});

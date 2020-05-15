
const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'animecharacters'
});


db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});


const express = require('express');


let app = express();

app.get('/api/allBorrowLendItems', (req, res) => {
    let sql = `SELECT * FROM items`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

app.get('/api/allUsers', (req, res) => {
    let sql = `SELECT * FROM users`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

app.get('/api/lendItem', (req, res) => {
    let sql = `INSERT INTO items SET ` + 
    `itemName = '${req.query.itemsName}' `;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        sql = `SELECT * FROM items`;
        query = db.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
        }); 
    });
    
});

app.get('/api/insertUser', (req, res) => {
    let sql = `INSERT INTO users SET ` +
    `name = '${req.query.userName}' `;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        sql = `SELECT * FROM users`;
        query = db.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
        });
    });
    
});

app.get('/api/deleteUser', (req, res) => {
    let sql = `DELETE FROM users WHERE name = '${req.query.userName}' `;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        sql = `SELECT * FROM users`;
        query = db.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
        });
    });
    
});

app.get('/api/borrowItem', (req, res) => {
    let sql = `DELETE FROM items WHERE itemName = '${req.query.itemsName}' `;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        sql = `SELECT * FROM items`;
        query = db.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
        });
    });
    
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

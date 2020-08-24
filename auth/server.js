// nohup nodemon -I /var/Server/auth/server.js > /var/Server/auth/auth.out &
const express = require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var MW_verifyToken = require('./middlewares/verifyToken');
var Response = require('./middlewares/Response');
require('dotenv').config({ path: './.env' });
const fs = require("fs");
var cors = require('cors');

// create new express app and save it as "app"
const app = express();
const PORT = 9999;

var mysql      = require('mysql');
const { debug } = require('console');

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  // port            : 8889,
  user            : 'root',
  // password        : 'root',
  password        : '1q2w3e4r5t',
  database        : 'webapp',
  insecureAuth : true
});

//Set Request Size Limit
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
app.use(cors());

// ADMIN
app.post('/register', (req, res, next) => {
  var sqlCompany = "INSERT INTO " + 
                      "`companies` (`registered_company_name`, `brand_name_dba`, `online_store_website`, `business_owner_email`, `federal_tax_classification`, `tax_identification_number`, `street_number_street_address`, `postal_code`, `city`, `country`, `province_of_incorporation`, `country_currency`, `account_holders_name`, `routing_number`, `account_number`) " + 
                    "VALUES ('"+req.body.Legal_Name_Company+"', '"+req.body.Brand_Name_DBA+"', '"+req.body.Online_Store_Website+"', '"+req.body.Business_Owner_Email+"', '"+req.body.Federal_Tax_Classification+"', "+req.body.Tax_Identification_Number+", '"+req.body.Street_Number_Steet_Name+"', '"+req.body.Company_Postal_Code+"', '"+req.body.Company_City+"', '"+req.body.Company_Country+"', '"+req.body.Province_Incorporation+"', '"+req.body.Currency+"', '"+req.body.Account_Holder_Name+"', '"+req.body.Routing_Number+"', '"+req.body.Account_Number+"');";

  pool.query(sqlCompany, (err, results, fields) => {
    if (err) {
      console.log(err);
      res.json({status: 500, message: 'Please try again later'});
    }else {

      const bdate = req.body.Date_Birth.split("/");

      var sql = "INSERT INTO " +
                  "`users` (`email`, `first_name`, `last_name`, `password`, `date_of_birth`, `residential_address`, `postal_code`, `city`, `country`, `active`, company_id) " +
                "VALUES ('"+req.body.Login_Email+"', '"+req.body.First_Name+"', '"+req.body.Last_Name+"', MD5('"+req.body.Login_Password+"'), '"+bdate[2]+"-"+bdate[1]+"-"+bdate[0]+"', '"+req.body.Residential_Address+"', '"+req.body.Manager_Postal_Code+"', '"+req.body.Manager_City+"', '"+req.body.Manager_Country+"', '0', "+results.insertId+");";
      pool.query(sql, (err, resultsfields2) => {
        if (err) {
          console.log(err);
          res.json({status: 500, message: 'Please try again later'});
        }else {
          res.json({status: 1, message: 'Success'});
        }
      });
    }
  });
  
});

// ADMIN
app.post("/loginAdmin", function (req, res) {
  let email = req.body.email;
  let pass = req.body.password;

  if (email == "douglasciole@gmail.com" && pass == "1q2w3e4r5t") {

    const user = {userName: "Douglas Ciole"};
    const token = jwt.sign(user, process.env.ACCEESS_SECRET_TOKEN);

    var r = new Response(1);
    r.addKey("userName", user.userName);
    r.addKey("accessToken", token);
    res.json(r.hash);
    return;
  }

  var r = new Response(401);
  res.json(r.hash);

});


// Middleware to check if its a valid user trying to access server infos.
app.use(MW_verifyToken);


// API <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ADMIN
app.post('/changeStatus', (req, res, next) => {
  let sql = "UPDATE `users` SET active = " + req.body.active + " WHERE id = " + req.body.id;
  pool.query(sql, (err, results, fields) => {
    if (err) {
      res.json({status: 500, message: 'Please try again later'});
    }
    
    let sql = "SELECT " +
                "companies.`id` as company_id, " +
                "companies.`registered_company_name`, " +
                "companies.`brand_name_dba`, " +
                "companies.`online_store_website`, " +
                "companies.`business_owner_email`, " +
                "companies.`federal_tax_classification`, " +
                "companies.`tax_identification_number`, " +
                "companies.`street_number_street_address`, " +
                "companies.`postal_code`, " +
                "companies.`city`, " +
                "companies.`country`, " +
                "companies.`province_of_incorporation`, " +
                "companies.`country_currency`, " +
                "companies.`account_holders_name`, " +
                "companies.`routing_number` as transit_number, " +
                "companies.`account_number`, " +
                "users.`active`, " +
                "users.`id` AS user_id " +
              "FROM " +
                "`companies` " +
                  "INNER JOIN users ON  " +
                    "users.`company_id` = companies.`id`";

    pool.query(sql, (err, results, fields2) => {
      if (err) {
        res.json([]);
        return [];
      }
      
      let productsQUery = "SELECT * FROM products WHERE active = 1";
      pool.query(productsQUery, (err, resultsProducts, fields2) => {
        if (err) {
          res.json([]);
          return;
        }

        results.map((row, i) => {
          results[i]["products"] = [];
          
          
          resultsProducts.map((linha, index) => {
            if (linha.company_id == row.company_id)
              results[i]["products"].push(linha);
          });
        });

        return res.json(results);
      });
    });
  })

});

// ADMIN
/* GET home page. */
app.post('/clients', (req, res, next) => {
  let sql = "SELECT " +
              "companies.`id` as company_id, " +
              "companies.`registered_company_name`, " +
              "companies.`brand_name_dba`, " +
              "companies.`online_store_website`, " +
              "companies.`business_owner_email`, " +
              "companies.`federal_tax_classification`, " +
              "companies.`tax_identification_number`, " +
              "companies.`street_number_street_address`, " +
              "companies.`postal_code`, " +
              "companies.`city`, " +
              "companies.`country`, " +
              "companies.`province_of_incorporation`, " +
              "companies.`country_currency`, " +
              "companies.`account_holders_name`, " +
              "companies.`routing_number` as transit_number, " +
              "companies.`account_number`, " +
              "users.`active`, " +
              "users.`id` AS user_id " +
            "FROM " +
              "`companies` " +
                "INNER JOIN users ON  " +
                  "users.`company_id` = companies.`id`";

  pool.query(sql, (err, results, fields) => {
    if (err) {
      res.json([]);
      console.log(err);
      return [];
    }
    
    let productsQUery = "SELECT * FROM products WHERE active = 1";
    pool.query(productsQUery, (err, resultsProducts, fields2) => {
      if (err) {
        res.json([]);
        return;
      }

      results.map((row, i) => {
        results[i]["products"] = [];
        
        
        resultsProducts.map((linha, index) => {
          if (linha.company_id == row.company_id)
            results[i]["products"].push(linha);
        });
      });

      return res.json(results);
    });
  });
});


// ADMIN
app.post('/changePurchaseShiping', (req, res, next) => {
  let sql = "UPDATE `purchases` SET shiped = " + req.body.active + " WHERE id = " + req.body.id + " AND company_id = " + req.body.company_id;
  pool.query(sql, (err, results, fields) => {
    if (err) {
      res.json({status: 500, message: 'Please try again later'});
    }

    let sql = "SELECT " +
                "purchases.*, " +
                "companies.brand_name_dba " + 
              "FROM " + 
                "purchases " + 
                "INNER JOIN companies ON companies.id = purchases.company_id ";

    pool.query(sql, (err, results, fields2) => {
      if (err) {
        res.json([]);
        return;
      }

      let productsQUery = "SELECT * FROM purchase_items";
      pool.query(productsQUery, (err, resultsProducts, fields3) => {
        if (err) {
          res.json([]);
          return;
        }

        results.map((row, i) => {
          results[i]["products"] = [];
          
          
          resultsProducts.map((linha, index) => {
            if (linha.company_id == row.company_id && row.id == linha.purchase_id)
              results[i]["products"].push(linha);
          });
        });

        return res.json(results);
      });
    });
  });
});

// ADMIN
app.post('/purchases', (req, res, next) => {
  let sql = "SELECT " +
              "purchases.*, " +
              "companies.brand_name_dba " + 
            "FROM " + 
              "purchases " + 
              "INNER JOIN companies ON companies.id = purchases.company_id ";

  pool.query(sql, (err, results, fields) => {
    if (err) {
      res.json([]);
      return;
    }

    let productsQUery = "SELECT * FROM purchase_items";
    pool.query(productsQUery, (err, resultsProducts, fields2) => {
      if (err) {
        res.json([]);
        return;
      }

      results.map((row, i) => {
        results[i]["products"] = [];
        
        
        resultsProducts.map((linha, index) => {
          if (linha.company_id == row.company_id && row.id == linha.purchase_id)
            results[i]["products"].push(linha);
        });
      });

      return res.json(results);
    });
  });
});


// make the server listen to requests
app.listen(PORT, () => {
  console.clear();
  console.log(`Server running at: http://localhost:${PORT}/`);
});
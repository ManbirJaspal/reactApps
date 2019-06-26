let express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');
    let pg = require('pg');
    const PORT = 8082;

    let pool = new pg.Pool({
      user: 'sahibjaspal',
      host: 'localhost',
      database: 'countries',
      password: 'msnjaspal',
      port: 5432,
      max: 10
    })

    pool.connect(function(err){
    if(!err) {
        console.log("Database is connected");
    } else {
        console.log("Error connecting database");
    }
    });


    let app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

  app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/api/new-country', function(request, response){
  var country_name = request.body.country_name;
  var continent_name = request.body.continent_name;
  pool.connect((err, db, done) => {
    if(err) {
      return response.status(400).send(err);
    }
    else {
      db.query('INSERT INTO country (country_name, continent_name) VALUES ($1, $2)', [country_name, continent_name], (err, table) => {
        done();
        if(err) {
          return response.status(400).send(err);
        }
        else {
          response.status(201).send({message: 'Data inserted' });
        }
      })
    }
  })
});
app.listen(PORT, () => console.log('Listening on port ' + PORT));

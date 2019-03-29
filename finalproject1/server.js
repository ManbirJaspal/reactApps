const express = require('express');
const bodyParser = require('body-parser');
const Pool = require('pg').Pool;

const app = express();
const port = 8082;

var hosts = ['http://localhost:3000'].join(', ');

const pool = new Pool({
    user: 'sahibjaspal',
    host: 'localhost',
    database: 'tio',
    password: 'msnjaspal',
    port: 5432,
});


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use((req, res, next) => {
    res.header('access-control-allow-origin', hosts);
    next();
});


app.get('/groups', getGroups);
app.get('/posts', getPosts);
app.post('/student', createStudent);
app.post('/login', loginStudent);
app.get('/comments', getComments);
app.post('/posts' , createPost);



function createPost(request,response) {
  console.log("inside createPost");
  console.log(request.body);

  const post = request.body.text;
  const group_id = request.body.group_id;
  const user_id = request.body.user_id;
  const post_id = request.body.post_id;



  pool.query('INSERT INTO student (email, password, fname, lname, address1, address2, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [email, password, fname, lname, address1, address2, city, state, zip], function(error, result) {
      if (error) {
          throw error
      }
      response.status(200);
  });
  }




function getGroups (request, response) {
    console.log("inside getgroups");
    const groupName = request.query.groupName;
 var query = "";

if (groupName != null) {
  query = `SELECT * FROM groups where group_name=${groupName} ORDER BY group_id ASC`;
} else {
  query = `SELECT * FROM groups ORDER BY group_id ASC`;
}
    pool.query(query, function(error, results) {
        if(error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
}

function getPosts (request, response) {
    console.log("inside getPosts");
    const groupId = request.query.groupId;
    console.log(groupId);
    var query =`SELECT * FROM posts join groups on posts.group_id = groups.group_id where posts.group_id=${groupId}`;
    pool.query(query, function(error, results) {
        if(error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
}

function getComments (request, response) {
    console.log("inside getComments");
    const postId = request.query.postId;
    console.log(postId);
    var query =`SELECT * FROM comments join posts on comments.post_id = posts.post_id where comments.post_id=${postId}`;
    pool.query(query, function(error, results) {
        if(error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

function createStudent (request, response) {
    console.log("inside createStudent");
    console.log(request.body);


    const email = request.body.emailId,
        password = request.body.password,
        fname = request.body.fname,
        lname = request.body.lname,
        address1 = request.body.address1,
        address2 = request.body.address2,
        city = request.body.city,
        state = request.body.state,
        zip = parseInt(request.body.zip);


    pool.query('INSERT INTO student (email, password, fname, lname, address1, address2, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [email, password, fname, lname, address1, address2, city, state, zip], function(error, result) {
        if (error) {
            throw error
        }
        response.status(200);
    });

}

function loginStudent (request, response) {
    console.log("inside Login Student!!");
    console.log(request.query.email);
    const email = request.query.email;

    pool.query('SELECT * FROM STUDENT WHERE email=$1)', [email], function(error, result) {
        if(error) {
            throw error;
        }
        console.log(result.rows)
        response.status(200).json(result.rows);
    });

}


app.listen(port);

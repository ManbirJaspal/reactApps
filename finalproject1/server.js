const express = require('express');
const bodyParser = require('body-parser');
const Pool = require('pg').Pool;
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

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
pool.connect(function(err){
  if(!err) {
      console.log("Database is connected");
  } else {
      console.log("Error connecting database");
  }
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true}));

app.use(function(request, response, next) {
response.header("Access-Control-Allow-Origin", "*");
response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.get('/groups', getGroups);
app.get('/posts', getPosts);
app.post('/student', createStudent);
app.post('/login', studentLogin);
app.get('/comments', getComments);
app.post('/posts' , createPost);


function createPost(request,response) {
  console.log("inside createPost");
  console.log(request.body);
  var post = request.body.post,
   group_id = request.body.group_id,
   user_id = request.body.user_id,
   title = request.body.title;

    pool.connect((err, db, done) => {
      if(err) {
        return response.status(400).send(err);
      }
      else {
        db.query('INSERT INTO posts (group_id, user_id, post, title) VALUES ($1, $2, $3, $4)', [group_id, user_id, post, title], (err, results, fields) => {
          done();
          if(err) {
            return response.status(400).send(err);
          }
            else {
              console.log(JSON.stringify(results.rows));
               response.status(201).send({message: 'Post Succesfull', data: JSON.stringify(results.rows)});
          }
        })
      }
    })
  }



function getGroups (request, response) {
    console.log("inside getgroups");
    const groupName = request.query.group_name;
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

function createStudent(request, response){
  console.log("inside createStudent()");
  var email = request.body.email,
          password = request.body.password,
          fname = request.body.fname,
          lname = request.body.lname;
  pool.connect((err, db, done) => {
    if(err) {
      return response.status(400).send(err);
    }
    else {
      db.query('INSERT INTO student (student_email, student_password, student_fname, student_lname) VALUES ($1, $2, $3, $4)', [email, password, fname, lname], (err, table) => {
        done();
        if(err) {
          return response.status(400).send(err);
        }
        else {
          response.status(201).send({message: 'REGISTRATION SUCCESSFULL' });
        }
      })
    }
  })
}

function studentLogin(request, response){
  console.log("inside StudentLogin()");
  var email = request.body.email,
      password = request.body.password;

  pool.connect((err, db, done) => {
    if(err) {
      return response.status(400).send(err);
    }
    else {
      db.query('SELECT * FROM student WHERE student_email=$1 and student_password=$2', [email, password], (err, results, fields) => {
        done();
        if(err) {
          return response.status(400).send(err);
        }
          else {
            console.log(JSON.stringify(results.rows));
             response.status(201).send({message: 'Login SUCCESSFULL', data: JSON.stringify(results.rows)});
        }
      })
    }
  })
}```

// async function createStudent (request, response){
//     console.log("inside createStudent");
//     var email = request.body.email,
//         password = request.body.password,
//         fname = request.body.fname,
//         lname = request.body.lname;
//
//
//     // console.log("req",req.body);
//
//   await pool.query('INSERT INTO student (student_email, student_password, student_fname, student_lname) VALUES ($1, $2, $3, $4)', [email, password, fname, lname], function (error, results, fields) {
//
//     console.log(response.status(200).json(results.rows));
//
//     response.send({
//       "code":200,
//       "success":"user registered sucessfully"
//         });
//   }
//   );
// }



//     const email = request.body.email,
//         password = request.body.password,
//         fname = request.body.fname,
//         lname = request.body.lname;
//
//
//     pool.query('INSERT INTO student (student_email, student_password, student_fname, student_lname) VALUES ($1, $2, $3, $4)', [email, password, fname, lname], function(error, result) {
//         if (error) {
//             throw error
//         }
//         response.status(200);
//
//     });
//
// }

// function loginStudent (request, response) {
//     console.log("inside Login Student!!");
//     console.log(request.body);
//     var email = request.body.email;
//     var password = request.body.password;
//       pool.query('SELECT * FROM student WHERE student_email=$1 and student_password=$2', [email, password], function (error, results, fields) {
//   if (error) {
//      console.log("error ocurred",error);
//     response.send({
//       "code":400,
//       "failed":"error ocurred"
//     })} else {
//         console.log(results, response.status(200).json(results.rows));
//         response.send({
//           "code":204,
//           "success":"Email and password does not match"
//             });
//       }
//
//
//
//   });
// }



app.listen(port);

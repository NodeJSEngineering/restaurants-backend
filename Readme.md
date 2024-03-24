node server.js
npm run serve



GET
localhost:4000/cafe

POST
localhost:4000/cafe/add
  {
   "name": "jhb",
  "description": "hbj",

  "location": "jnkj"

}

GET on the basis of location
localhost:4000/cafe/cafes?location=jnkjcgbcbxf

PUT
localhost:4000/cafe/edit/64156ceec1a51f07ef0db033

DELETE
localhost:4000/cafe/delete/6416ac6255c23ab1be48c33f

POST
localhost:4000/cafe/registeremployee/64156ceec1a51f07ef0db033
  {
   "name": "test",
  "email_address": "test2",

  "phone_number": 467,
    "gender": "Male"

}

GET
localhost:4000/employee

GET
localhost:4000/cafe/employees?cafe=jhssssssssssss

PUT
localhost:4000/employee/edit/64158330f0e35769082b2547

DELETE
localhost:4000/employee/delete/641570ec16d644828dd5f7b6
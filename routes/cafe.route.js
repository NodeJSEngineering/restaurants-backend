const express = require('express');
const cafeRoutes = express.Router();

let Cafe = require('../models/Cafe');
let Employee = require('../models/Employee');


cafeRoutes.route('/add').post(function (req, res) {
  let cafeData = new Cafe(req.body);

  cafeData.save(function (err, savedJob) {
    if (err) {
      return res.status(400).send("unable to save to database" + err);
    } else {
      return res.status(200).json({ 'cafe': 'cafe added successfully' });
    }
  })
});

cafeRoutes.route('/').get(function (req, res) {
  Cafe.find(function (err, cafes) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(cafes);
    }
  });
});

cafeRoutes.route('/cafes').get(function (req, res) {

  Cafe.find(function (err, cafes) {
    if (err) {
      console.log(err);
    }
    else {
   
     const filteredCafes = cafes.filter(cafe => cafe.location === req.query.location);
      res.json(filteredCafes);
    }
  }
  );
});

cafeRoutes.route('/edit/:id').put(async function (req, res) {
  try {
  let result = await Cafe.updateOne({_id:req.params.id},{
    $set:{
      name:req.body.name,
      description:req.body.description,
      location:req.body.location,
      employees:req.body.employees

    }
  })
  res.json(result)
  } catch (err) {
    res.status(400).send("unable to save to database" + err);
  }
});

cafeRoutes.delete('/delete/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await Cafe.findByIdAndDelete(id)
      res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

cafeRoutes.route('/registeremployee/:id').post(async function (req, res) {
  let result;


  let findcafe = await Cafe.findOne({_id:req.params.id})
  findcafe.employees.push(new Employee(req.body))
    result = await Cafe.updateOne({_id:req.params.id},{
      $set:{
        employees: findcafe.employees
      }
    })
  res.json(result)
});



cafeRoutes.route('/employees').get(function (req, res) {

  Cafe.find(function (err, cafes) {
    if (err) {
      console.log(err);
    }
    else {
   
     const filteredCafes = cafes.filter(cafe => cafe.name === req.query.cafe);

      res.json(filteredCafes[0].employees);
    }
  }
  );
});

module.exports = cafeRoutes;

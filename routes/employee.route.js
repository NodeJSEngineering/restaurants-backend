const express = require('express');
const employeeRoutes = express.Router();
let Employee = require('../models/Employee');

employeeRoutes.route('/').get(function (req, res) {
  Employee.find(function (err, employees) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(employees);
    }
  });
});

employeeRoutes.delete('/delete/:id', async (req, res) => {
  try {
      const id = req.params.id;
 
      const data = await Employee.findByIdAndDelete(id)
      res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

employeeRoutes.route('/edit/:id').put(async function (req, res) {
  try {
  let result = await Employee.updateOne({_id:req.params.id},{
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
module.exports = employeeRoutes;

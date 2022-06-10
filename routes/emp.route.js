const express = require('express');
const { AddEmp, FindallEmp, FindEmpById, UpddateEmp, DeleteEmp } = require('../controller/emp.controller');
const router = express.Router()



/* add employee */
router.post('/emps', AddEmp)

/* find all employees */
router.get('/emps', FindallEmp)

/* find single employee */
router.get('/emps/:id', FindEmpById)

/* modify employee */
router.put('/emps/:id', UpddateEmp)

/* delete employee */
router.delete('/emps/:id', DeleteEmp)




module.exports = router;
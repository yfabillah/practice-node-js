const { getStudents, getStudentById } = require('../controllers/student.controller')

const router = require('express').Router()


router.route('/').get(getStudents).post(async(req, res) => {
    const {username} = req.body

    if(!username){
        res.status(422)
        res.json({
            message: 'Please enter username!',
        })
        return 
    }

    res.json({
        message: 'OKE',
        username
    })
})

router.route('/:studentId').get(getStudentById)




module.exports = router
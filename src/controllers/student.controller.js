const studentData = require("../studentData")

const getStudents = async(req, res) => {
    res.json(studentData)
}

const getStudentById = async(req, res) => {
    const {studentId} = req.params

   let student = studentData.find(data => data.id === parseInt(studentId))

    if(!student){
        res.status(404)
        res.json({
            message: 'Student not found!'
        })
        return
    }

    res.status(200)
    res.json({student, studentId})
    return
}


module.exports = {
    getStudents, 
    getStudentById
}
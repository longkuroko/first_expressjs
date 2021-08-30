// const Courses = require('../models/Courses');
const Course = require('../models/Courses');
const {muntipleMongooseToObject} = require('../../util/mongoose');



class MeController {
    //[get] /me/stored/courses  
    storedCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
                .then(([courses, deletedCount]) =>
                res.render('me/storedCourse', 
                {
                    deletedCount,
                    courses: muntipleMongooseToObject(courses)
                })
                ).catch(next);

            }
        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch(() => {});

        // Course.find({})
        //         .then(courses => res.render('me/storedCourse', 
        //         {
        //             courses: muntipleMongooseToObject(courses)
        //         }))
        //         .catch(next);


    trashCourses(req, res, next) {
        Course.findDeleted({})
        .then(courses => res.render('me/trashCourse', 
        {
            courses: muntipleMongooseToObject(courses)
        }))
        .catch(next);
    }
}

module.exports = new MeController();
const {Router} = require('express');
const router = Router();
const Course = require('../models/course');

router.get('/', async (req, res) => {
    const courses = await Course.getAll();
    res.render('courses', {
        title: 'Courses',
        isCurses: true,
        courses
    });
});

router.get('/:id', async (req, res) => {
    const course = await Course.getById(req.params.id)
    res.render('curse', {
        layout:'empty',
        title:`Curse${course.title}`,
        course
    })
})
module.exports = router;
const {Router} = require('express');
const router = Router();
const Card = require('../models/card');
const Curses = require('../models/course');

router.post('/add', async (req, res) => {
    const curses = await Curses.getById(req.body.id);
    await Card.add(course);
    res.redirect('/card')
})

router.get('/', async (req, res) => {
    const card = await Card.fetch();
    res.render('card', {
        title: 'Card',
        card
    });
});
module.exports = router;
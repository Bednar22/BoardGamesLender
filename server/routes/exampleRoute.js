const router = require('express').Router();

router.route('/').get((req, res) => {
    examp = {
        name: 'Witaj',
        ex: 'Przykład :)',
    };
    res.json(examp);
});

module.exports = router;

class ExampleController {
    getExample(req, res) {
        res.send('GET example response');
    }

    postExample(req, res) {
        const data = req.body;
        res.send(`POST example response with data: ${JSON.stringify(data)}`);
    }
}

module.exports = ExampleController;
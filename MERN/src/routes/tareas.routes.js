const express =require('express');
const Tarea = require('../models/tarea');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Tarea.find();
        res.status(200).send({ message: "OK", data: tasks });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ message: "NOK" });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const task = await Tarea.findById(req.params.id);
        res.status(200).send({ message: "OK", data: task });
    
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ message: "NOK" });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = new Tarea({ title, description });
        await task.save();

        res.status(200).send({ message: "Create OK" });
    
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ message: "Create NOK" });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = { title, description };
        await Tarea.findByIdAndUpdate(req.params.id, task);

        res.status(200).send({ message: "Updated OK" });
    
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ message: "Updated NOK" });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Delete OK" });
    
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send({ message: "Delete NOK" });
    }
});

module.exports = router;
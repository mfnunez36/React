import { dbConnection } from 'utils/dbconnection'
import Task from "models/tareamodel";

dbConnection();

export default async function handler(req, res) {
    
    const { method, body } = req
    
    switch (method) {
        case 'GET':
            try {
                const tasks = await Task.find()
                return res.status(200).json(tasks)
            } catch (error) {
                res.status(500).json({ Error: error.message })
            }
            

        case 'POST':
            try {
                const newTask = new Task(body);
                const createdTask = await newTask.save()
                return res.status(201).json({ createdTask })
            
            } catch (error) {
                res.status(500).json({ Error: error.message })
            }
            

        default:
            return res.status(400).json({ msj: 'not found method' })
    }
    
}
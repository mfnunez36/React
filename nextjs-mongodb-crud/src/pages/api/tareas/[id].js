import { dbConnection } from "utils/dbconnection"
import Task from "models/tareamodel"

dbConnection()
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    const { method, body, query: { id } } = req

    switch (method) {
        case 'GET':
            try {
                const task = await Task.findById(id)
                if (!task) { return res.status(400).json({ msj: 'Not found' }) }
                return res.status(200).json(task);
            
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        case 'PUT':
            try {
                const task = await Task.findByIdAndUpdate(id, body, { new: true })
                if (!task) { return res.status(400).json({ msj: 'Not found' }) }
                
                return res.status(200).json(task);
            
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        case 'DELETE':
            try {
                const task = await Task.findByIdAndDelete(id)
                if (!task) { return res.status(400).json({ msj: 'Not found' }) }
                return res.status(200).json(task);
            
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }
        default:
            return res.status(500).json({ msj: 'not correct petition' })
    }
}
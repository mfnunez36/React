import { Schema, model, models } from "mongoose"

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title es requerido'],
        unique: true,
        maxlength: [30, 'maximo 30 caracteres']
    },
    description: {
        type: String,
        required: [true, 'title es requerido'],
        maxlength: [250, 'maximo 250 caracteres']
    }
}, 
{
    timestamps: true
})

export default models.Task || model('Task', taskSchema)
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title:{type:String, required:true},
    prompt:{type:String, required:true},
    photo:{type:String, required:true},
});


const imageSchema = mongoose.model('schema',schema);

export default imageSchema;

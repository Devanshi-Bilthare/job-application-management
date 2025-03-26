const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    name:String,
    company:String,
    type:String,
    status:{
        type:String,
        enum:['Pending','Processing','Selected','Rejected','Expired']
    },
    platform:String,
    salary:Number

},{timestamps:true})

const JobModel = mongoose.model('Job',jobSchema);
module.exports = JobModel;
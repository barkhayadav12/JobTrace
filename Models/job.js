import mongoose,{Schema} from "mongoose";

const jobSchema=new Schema({
    company_name:String,
    position:String,
    work_type:String,
    location:String,
    status:String,

},{timestamps:true});

const Job=mongoose.models.Job || mongoose.model("Job",jobSchema)

export default Job;
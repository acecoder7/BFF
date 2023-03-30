import mongoose from "mongoose";


const SubFieldSchema = new mongoose.Schema(
    {
      field:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Field",
      },
      subfield: {
        type: String,
        required: [true, "Please enter sub-field name"],
      },
      resources: [{
        url:{
            type:String
        },
        rlevel:{
            type:Number     //1,2,3 Basic, Intermidiate, Advanced
        }
      }] 
    }
);


export default mongoose.model("SubFeild", SubFieldSchema);
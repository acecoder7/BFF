import mongoose from "mongoose";


const FieldSchema = new mongoose.Schema(
    {
      field: {
        type: String,
        required: [true, "Please enter field name"],
      },
      subfield: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubField"
      }] 
    }
);


export default mongoose.model("Feild", FieldSchema);
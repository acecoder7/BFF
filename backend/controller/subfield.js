import User from "../model/User.js";
import ApiFeatures from "../utils/apiFeatures.js";
import SubField from "../model/SubField.js";

//Create SubField ------don't use
export const createSubField = async (req, res) => {
  try {
    const newFieldData = {
      field: req.body.field,
      subfield: req.body.subfield,
      resources: null
    };

    const field = await SubField.create(newFieldData);

    res.status(201).json({
      success: true,
      message: "Sub Field Added",
      field,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Delete sub Field
export const deleteSubField = async (req, res) => {
  try {
    const field = await SubField.findByIdAndDelete(req.params.subfieldId);

    if (!field) {
      return res.status(404).json({
        success: false,
        message: "Sub Field not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Sub Field deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


//GetAll Sub Field 
export const getallSubField = async (req, res) => {
  const apiFeatures = new ApiFeatures(SubField.find(), req.query)
    .search()
    .filter();
  try {
    const field = await apiFeatures.query;
    //const users = await User.find();
    res.status(200).json({
      success: true,
      field,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


//Get Single Field
export const getSubField = async (req, res) => {
  try {
    const field = await SubField.findById(req.params.subfieldId);
    if (!field) {
      return res.status(404).json({
        success: false,
        message: "Sub Field not found",
      });
    }
    res.status(200).json({
      success: true,
      field,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


//Add Resources
export const addResource = async (req, res) => {
  try {
    const subfieldId = req.params.subfieldId;
    const { url, rlevel } = req.body;

    // Check if the subfield exists
    const subfield = await SubField.findById(subfieldId);
    if (!subfield) {
      return res.status(404).json({ message: "Subfield not found" });
    }

    // Create the new resource object
    const newResource = { url, rlevel };

    // Add the new resource to the subfield's resources array
    subfield.resources.push(newResource);
    await subfield.save();

    res.status(200).json({
      success: true,
      message: "Resource Added",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
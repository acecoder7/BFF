import User from "../model/User.js";
import Field from "../model/Field.js";
import SubField from "../model/SubField.js";
import ApiFeatures from "../utils/apiFeatures.js";

//Create Field
export const createField = async (req, res) => {
  try {
    const newFieldData = {
      field: req.body.field,
      subfield: null,
    };

    const field = await Field.create(newFieldData);

    res.status(201).json({
      success: true,
      message: "Field Added",
      field,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Delete Field
export const deleteField = async (req, res) => {
  try {
    const field = await Field.findByIdAndDelete(req.params.fieldId);

    if (!field) {
      return res.status(404).json({
        success: false,
        message: "Field not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Field deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


//GetAll Field 
export const getallField = async (req, res) => {
  const apiFeatures = new ApiFeatures(Field.find(), req.query)
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
export const getField = async (req, res) => {
  try {
    const field = await Field.findById(req.params.fieldId);
    if (!field) {
      return res.status(404).json({
        success: false,
        message: "Field not found",
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


//Add sub fields

export const addSubfield = async (req, res) => {
  try {
    const fieldId = req.params.fieldId;
    const { subfield } = req.body;

    // Check if the field exists
    const field = await Field.findById(fieldId);
    if (!field) {
      return res.status(404).json({ message: "Field not found" });
    }

    // Create the new subfield
    const newSubfield = await SubField.create({
      field: fieldId,
      subfield,
      resources:null,
    });

    // Add the new subfield to the field's subfield array
    field.subfield.push(newSubfield);
    await field.save();

    res.status(201).json({
      success: true,
      message: "Subfield added successfully",
      newSubfield,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



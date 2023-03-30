import User from '../model/User.js';


export const addCourseToPlan = async (req, res) => {
  try {
    const { fieldId } = req.body;

    // Find the user by their ID
    const user = await User.findById(req.user.id);

    // Create a new course object with the provided field and subfield IDs
    const newCourse = {
      field: fieldId,
      subcourse: null,
    };

    // Add the new course object to the user's plan
    user.plan.push({ course: newCourse });

    // Save the updated user object to the database
    await user.save();

    // Return a success message with the updated user object
    res.status(200).json({ success: true, message:"Field Added" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export const addSubcourseToCourse = async (req, res) => {
  try {
    const { courseId, subfieldId, proficiencyLevel } = req.body;

    // Get the ID of the logged-in user from req.user
    const userId = req.user._id;

    // Find the user by their ID
    const user = await User.findById(userId);

    // Find the course with the provided ID in the user's plan
    const courseIndex = user.plan.findIndex(course => course._id.toString() === courseId.toString());

    if (courseIndex === -1) {
      return res.status(404).json({ message: "Course not found in user's plan" });
    }

    // Create a new subcourse object with the provided subfield ID and proficiency level
    const newSubcourse = {
      subfield: subfieldId,
      ulevel: proficiencyLevel
    };

    // Add the new subcourse to the subcourse array for the course
    user.plan[courseIndex].subcourse.push(newSubcourse);

    // Save the updated user document
    await user.save();

    res.status(200).json({ success: true, message: "Done" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
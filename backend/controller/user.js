import User from '../model/User.js';
import Field from '../model/Field.js';''
import axios from 'axios';


export const addCourseToPlan = async (req, res) => {
  try {
    const fieldId  = req.body.field;
    const field = await Field.findById(fieldId);
    if (!field) {
      return res.status(404).json({ error: 'Field not found' });
    }

    // Find the user by their ID
    const user = await User.findById(req.user.id);

    // add the field to the user's plan
    const newField = {
      field: field._id,
      subcourse: [],
    };
    user.plan.push(newField);
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

    //console.log(user.plan[0].field);
    // Find the course with the provided ID in the user's plan
    const courseIndex = user.plan.findIndex(c => c.field.toString() === courseId.toString()); 

    if (courseIndex === -1) {
      return res.status(404).json({ message: "Course not found in user's plan" });
    }

    // Create a new subcourse object with the provided subfield ID and proficiency level
    const newSubcourse = {
      subfield: subfieldId,
      ulevel: proficiencyLevel
    };

    // Find the course object in the user's plan and add the new subcourse to its subcourse array
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


//Connect Buddy
export const ConnectBuddyRequest = async(req, res) => {
  try {
    const { userId } = req.params; // assuming you're passing the userId in the request parameters
    const user = await User.findById(req.user._id); // assuming you're using passport or some other authentication middleware to attach the user object to the request
    const connectionUser = await User.findById(userId);
    if (!user || !connectionUser) {
      return res.status(404).json({ success:false, error: "User not found" });
    }
    if (user.connections.some((c) => c.user.equals(connectionUser._id))) {
      return res.status(400).json({ success:false, error: "Connection already exists" });
    }
    user.connections.push({ user: connectionUser._id, status: "pending" });
    await user.save();

      res.status(200).json({
        success: true,
        message: "Connection Request Send",
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}



//Connection Desicion
export const ConnectionDesicion = async(req, res) => {
  try {
    const { status } = req.body;
    const userId  = req.params.userId;
    const user = await User.findById(req.user._id);
    const connectionUser = await User.findById(userId);
    if (!user || !connectionUser) {
      return res.status(404).json({ success:false, error: "User not found" });
    }
    const connectionIndex = user.connections.findIndex(
      (c) => c.user.equals(connectionUser._id)
    );
    if (connectionIndex === -1) {
      return res.status(400).json({ success:false, error: "Connection not found" });
    }
    if (!["accepted", "declined"].includes(status)) {
      return res
        .status(400)
        .json({ success:false, error: "Invalid status, must be 'accepted' or 'declined'" });
    }
    user.connections[connectionIndex].status = status;
    if (status === "accepted") {
      connectionUser.connections.push({
        user: user._id,
        status: "accepted",
      });
      await connectionUser.save();
    }
    await user.save();

      res.status(200).json({
        success: true,
        message: "Connection Request Processed",
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}




//Performance comparison
export const PerformanceComparision = async(req, res) => {
  const loggedInUserId = req.user._id;
  const selectedUserId = req.params.userId;

  try {
    const [loggedInUser, selectedUser] = await Promise.all([
      User.findById(loggedInUserId).select('codeforce_handle'),
      User.findById(selectedUserId).select('codeforce_handle'),
    ]);

    const [loggedInUserRatingHistory, selectedUserRatingHistory, contestList] = await Promise.all([
      axios.get(`https://codeforces.com/api/user.rating?handle=${loggedInUser.codeforce_handle}`),
      axios.get(`https://codeforces.com/api/user.rating?handle=${selectedUser.codeforce_handle}`),
      axios.get('https://codeforces.com/api/contest.list'),
    ]);

    // Get the latest rating of each user
    const loggedInUserRating = loggedInUserRatingHistory.data.result.slice(-1)[0].newRating;
    const selectedUserRating = selectedUserRatingHistory.data.result.slice(-1)[0].newRating;

    // Find the common contests
    const commonContests = contestList.data.result.filter((contest) => {
      return contest.phase === 'FINISHED' && 
             contest.type === 'CF' && 
             contest.name.includes(loggedInUserRatingHistory.data.result[0].contestName);
    });

    const contestPerformanceMetrics = commonContests.map((contest) => {
      const loggedInUserContestRank = loggedInUserRatingHistory.data.result.find((ratingChange) => {
        return ratingChange.contestId === contest.id;
      }).rank;

      const selectedUserContestRank = selectedUserRatingHistory.data.result.find((ratingChange) => {
        return ratingChange.contestId === contest.id;
      }).rank;

      return {
        contestName: contest.name,
        loggedInUserRank: loggedInUserContestRank,
        selectedUserRank: selectedUserContestRank,
        rankDifference: selectedUserContestRank - loggedInUserContestRank,
      };
    });

    res.status(200).json({
      loggedInUserId: loggedInUserId,
      selectedUserId: selectedUserId,
      loggedInUserRating: loggedInUserRating,
      selectedUserRating: selectedUserRating,
      contestPerformanceMetrics: contestPerformanceMetrics,
    });
  }catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
}
}
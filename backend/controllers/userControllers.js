import Orders from "../models/Orders.js";
import Users from "../models/Users.js";

export const getTheNumberOfRecordsInUser=async(req,res)=>{
  try{
    const result=await Users.find({})
    console.log(result.length)
    res.status(200).json(result)
    }
    catch (error) {
    console.error("Error counting orders for user:", error);
    res.status(500).json({ message: "Server error" });
  }
}

export const getOrderCountForUser = async (req, res) => {
  try {
    const { userId } = req.params; // from route param
    const count = await Orders.countDocuments({ user_id: userId });

    res.status(200).json({ user_id: userId, totalOrders: count });
  } catch (error) {
    console.error("Error counting orders for user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getUserDetails = async (req, res) => {
  try {
    const { getEmail } = req.params;

    // Find the user
    const user = await Users.findOne({ email: getEmail });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log("User ID from Users collection:", user.id, typeof user.id);

    // Count orders for that user
    const totalOrders = await Orders.countDocuments({ user_id: user.id });

    const userWithOrderCount = {
      ...user.toObject(),
      totalOrders
    };

    res.status(200).json(userWithOrderCount);
  } catch (error) {
    console.error("Error getting user details:", error);
    res.status(500).json({ message: "Server error" });
  }
};
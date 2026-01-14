import * as mongoose from "mongoose";


const dbUserSchema = new mongoose.Schema({
        userId: { type: Number, required: true },
        name: { type: String, trim: true },
        gender: { type: String },
        membershipStartDate: Date,
        membershipEndDate: Date,
},{
        collection: "users",
        strict: false,
    }
)

const User = mongoose.model("User",dbUserSchema);

export default User;
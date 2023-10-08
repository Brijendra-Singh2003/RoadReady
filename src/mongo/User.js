import mongoose, { Schema, model } from 'mongoose'

const UserSchema = new Schema(
    {
        name: String,
        image: String,
        Location: String,
        lat: Number,
        lot: Number,
        desc: String,
        rating: Number,
        phone: Number
    }
)

const User = mongoose.models.User || model('User', UserSchema);

export default User;
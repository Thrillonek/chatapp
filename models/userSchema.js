import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const userModel = new mongoose.Model('user', userSchema);
module.exports = userModel;

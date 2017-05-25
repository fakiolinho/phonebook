import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  homeNumber: {
    type: String,
    required: true,
  },
  workNumber: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  versionKey: false,
});

UserSchema.pre('save', function (next) {
  const now = new Date();

  if (!this.createdAt) {
    this.createdAt = now;
  }
  this.updatedAt = now;

  next();
});

export default mongoose.model('user', UserSchema);

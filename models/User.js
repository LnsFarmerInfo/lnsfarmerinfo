import  mongoose, { Schema, model } from  "mongoose";

const UserSchema = new Schema({
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String
    },
    firstName: {
      type: String,
      required: [true, "first Name is required"]
    },
    lastName: {
      type: String,
      required: [true, "last Name is required"]
    },
    usn : {
      type : String,
      required : [true,"usn is required"]
    },
    courseCode : {
        type : Number,
        required : true
    },
    semester : {
        type : Number,
        required : true
    },
    phoneNumber : {
        type : String,
        required : true
    },
    collegeName : {
        type : String,
        required : true
    },
    transactionid : {
      type : String,
      required : true
    }
  },
  {
    timestamps: true,
  }
);

const  User  =  mongoose.models?.User  ||  model('User', UserSchema);
export  default  User;
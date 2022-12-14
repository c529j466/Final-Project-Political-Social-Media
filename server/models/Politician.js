const { Schema, model } = require('mongoose');
const validator = require("validator");

// Schema to create Politician model
const politicianSchema = new Schema(
    {
     username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
     },
     password: {
        type: String,
        required: true,
      },
     email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      validate: [validator.isEmail, "Valid email address required"],
     },
     city: {
        type: String,
        unique: false,
        required: true,
     },
     state: {
        type: String,
        unique: false,
        required: true,
     },
     district: {
        type: Number,
        unique: false,
        required: true,
     },
     posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'post',
      },
    ],
     followers: [
        {
            type: Schema.Types.ObjectId,
        }
     ],
     followerCount: Number,
    },
    {
        toJSON: {
          getters: true,
          virtuals: true,
        },
        id: false,
      }
    );
    
    politicianSchema.pre('save', async function (next) {
        if (this.isNew || this.isModified('password')) {
          const saltRounds = 10;
          this.password = await bcrypt.hash(this.password, saltRounds);
        }
      
        next();
      });
      
      // custom method to compare and validate password for logging in
      politicianSchema.methods.isCorrectPassword = async function (password) {
        return bcrypt.compare(password, this.password);
      };
    
      politicianSchema.virtual('followerCount').get(function() {
      return this.followers.length;
    });
    
    const Politician = model('politician', politicianSchema);
    
    module.exports = Politician;

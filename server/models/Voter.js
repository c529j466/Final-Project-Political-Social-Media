const { Schema, model } = require('mongoose');
const validator = require("validator");

// Schema to create Voter model
const voterSchema = new Schema(
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
     following: [
        {
            type: Schema.Types.ObjectId,
            ref: "following",
        }
     ]
    },
    {
        toJSON: {
          getters: true,
          virtuals: true,
        },
        id: false,
      }
    );

    voterSchema.pre('save', async function (next) {
        if (this.isNew || this.isModified('password')) {
          const saltRounds = 10;
          this.password = await bcrypt.hash(this.password, saltRounds);
        }
      
        next();
      });
      
      // custom method to compare and validate password for logging in
      voterSchema.methods.isCorrectPassword = async function (password) {
        return bcrypt.compare(password, this.password);
      };

      voterSchema.virtual('followerCount').get(function() {
        return this.followers.length;
      });
      
      const Voter = model('voter', voterSchema);
      
      module.exports = Voter;
  



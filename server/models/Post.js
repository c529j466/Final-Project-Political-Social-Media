const { Schema, model } = require('mongoose');

// Schema to create Post model
const postSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    meta: {
      likes: Number,
    },
    text: {
      type: String,
      maxLength: 500,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `upvoteCount` that gets the amount of likes per user
postSchema
  .virtual('likes')
  // Getter
  .get(function () {
    return this.meta.likes;
  });

// Initialize our Post model
const Post = model('post', postSchema);

module.exports = Post;
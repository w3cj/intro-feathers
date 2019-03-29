// todos-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const todos = new Schema({
    text: { type: String, required: true },
    done: { type: Boolean, default: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('todos', todos);
};

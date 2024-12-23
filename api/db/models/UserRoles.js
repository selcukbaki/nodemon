const mongoose = require("mongoose");
const { version } = require("mongoose");

const schema = mongoose.Schema({
    role_id:{type: mongoose.SchemaTypes.ObjectId,required:true},
  
    user_id:{type: mongoose.SchemaTypes.ObjectId,required:true}

},{
    versionKey:false,
    timestamps:{
        createdAt: "created_at",
        updateAt: "updated_at"
    }

});

class UserRoles extends mongoose.Model{

}

schema.loadClass(UserRoles);
module.exports = mongoose.model("user_roles", schema);


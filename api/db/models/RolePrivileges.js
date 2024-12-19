const mongoose = require("mongoose");
const { version } = require("mongoose");

const schema = mongoose.Schema({
    role_id:{type: mongoose.SchemaTypes.ObjectId,required:true},
  
    permission:{type:String,required:true},
    created_by:{type: mongoose.SchemaTypes.ObjectId,required:true}

},{
    versionKey:false,
    timestamps:{
        createdAt: "created_at",
        updateAt: "updated_at"
    }

});

class RolePrivilages extends mongoose.Model{

}

schema.loadClass(RolePrivilages);
module.exports = mongoose.model("role_privilages", schema);


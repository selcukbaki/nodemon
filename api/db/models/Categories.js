const mongoose = require("mongoose");

const schema = mongoose.Schema({
    
    is_active:{type: Boolean,default:true},
    created_by:{type: mongoose.SchemaTypes.ObjectId,required:true}

},{
    timestamps:{
        createdAt: "created_at",
        updateAt: "updated_at"
    }

});

class Categories extends mongoose.Model{

}

schema.loadClass(Categories);
module.exports = mongoose.model("categories", schema);


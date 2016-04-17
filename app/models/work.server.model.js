var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var WorkSchema = new Schema({
    
    company: String,
    city: String,
    country: String,
    
    startdate:{
        type:Date
    },
    
    enddate:{
        type:Date
    },

created:{
type:Date,
default: Date.now
},

position:String,


details: String,

creator:{
    type: Schema.ObjectId,
    ref: 'Student'
}
});

mongoose.model('Work',WorkSchema);
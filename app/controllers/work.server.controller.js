var mongoose = require('mongoose'),
Work = mongoose.model('Work');

var getErrorMessage = function (err) {
    if(err.errors){
        for(var errName in err.errors) {
        if(err.errors[errName].message) return err.errors[errName].
        message;
    }
    } else{
        return 'Unknown server error';
    }
};

exports.create = function (req,res) {
    var work = new Work(req.body);
    work.creator = req.user;
    
    work.save(function(err){
        if(err){
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else{
            res.json(work);
        }
    });
};

exports.list=function(req,res){
    Work.find().sort('-created').populate('creator','firstName lastName fullName').exec(function(err,works){
        if(err){
            return res.status(400).send({
                message:getErrorMessage(err)
            });
        }
        else{
            res.json(works);
        }
    });
};

exports.workByID = function (req,res,next,id) {
    Work.findById(id).populate('creator','firstName lastName fullName').exec(function (err,work) {
        if(err) return next(err);
        
        if(!work) return next(new Error ('Failed to load work' + id));
        
        req.work = work;
        next();
    });
};

exports.read = function (req,res) {
    res.json(req.work);
};

exports.update = function (req,res) {
    var work = req.work;
    
    work.company = req.body.company;
    work.city = req.body.city;
    work.country = req.body.country;
    work.position = req.body.position;
    work.startdate = req.body.startdate;
    work.details = req.body.details;
    
    work.save(function (err) {
        if(err){
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else{
            res.json(work);
        }
    });
};

exports.delete = function (req,res) {
    var work = req.work;
    
    work.remove(function (err) {
        if(err){
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else{
            res.json(work);
        }
    });
};

exports.hasAuthorization = function (req,res,next) {
    if(req.work.creator.id !== req.user.id){
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};
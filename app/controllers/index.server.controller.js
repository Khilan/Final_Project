exports.render=function(req,res){
   

    res.render('index',{
        title: 'Hello World',
        user: JSON.stringify(req.user)
    });
    
};

exports.student=function(req,res){
   

    res.render('stuindex',{
        title: 'Hello World',
        user: JSON.stringify(req.user)
    });
    
};

exports.employee=function(req,res){
   

    res.render('empindex',{
        title: 'Hello World',
        user: JSON.stringify(req.user)
    });
    
};
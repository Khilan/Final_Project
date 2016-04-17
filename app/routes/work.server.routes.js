var students = require('../../app/controllers/student.server.controller'),
    works = require('../../app/controllers/work.server.controller');
    
module.exports = function (app) {
    app.route('/api/works')
       .get(works.list)
       .post(students.requiresLogin, works.create);
       
    app.route('/api/works/:workId')
       .get(works.read)
       .put(students.requiresLogin, works.hasAuthorization, works.update)
       .delete(students.requiresLogin, works.hasAuthorization, works.delete);
       
  app.param('workId', works.workByID);
};
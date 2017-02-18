var models = require('../models');
models.sequelize.sync();

var modelController = {
	userCreate: function(name, username, password, cb){
	  	models.User.create({
	  	  name: name,
	      username: username,
	      password: password,
	    }).then(function(success) {
	      	cb(success);
		}).catch(function(err){
			 cb(err);
		});
	},
	userHome: function(id, cb){
		models.User.findOne({ where: {id: id}}).then(function(user){
	        	cb(user);
			}).catch(function(err){
				cb(err);
			});
  	}
}

module.exports = modelController;
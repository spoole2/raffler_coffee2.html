// bookview.js

var app = app || {};

app.Book = Backbone.Model.extend({
	defaults: {
		coverImage: 'placeholder.png',
		title: 'No Title',
		author: 'Unknown',
		releaseYear: 'Unknown',
		image: 'Unknown'
	},

	idAttribute: '_id',

	parse: function(response){
		response._id = response._id.$oid;
		return response;
	}
});

app.BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'bookContainer',
	template: _.template($('#bookTemplate').html()),
	events: {
		'click .delete': 'deleteBook'
	},

	deleteBook: function(){
		// Delete Model
		this.model.destroy({success: function(model, response){
			console.log(model.toJSON());
		}});

		// Delete View
		this.remove();
	},

	render: function(){
		// this.el is what we defined in tagName...use $el to get access to JQuery html() function
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});
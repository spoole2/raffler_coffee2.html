// bookmodel.js

var app = app || {};

app.Book = Backbone.Model.extend({
	defaults: {
		coverImage: 'placeholder.png',
		title: 'No Title',
		author: 'Unknown',
		releaseYear: 'Unknown'
	}
});

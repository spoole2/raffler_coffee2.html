// library2.js

var app = app || {};

app.Library = Backbone.Collection.extend({
	model: app.Book;
	url: '/~spoole2/is698cs/8673741/rest/restzzz.php?/books', // http://backbonejs.org/#Model-url
});
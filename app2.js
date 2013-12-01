// global App - bootstrap Ember.js with a namespace
window.App = Ember.Application.create();

// Router
App.Router.map(function(){
	this.route('entries', {path: '/'}); // set the root path to the entries controller
	this.resource('entries');
});

App.EntriesRoute = Ember.Route.extend({
	model: function(){
		this.store.push(App.Entry,{id: "preload", name: "moe", winner: false}); // preload a record
		return this.store.find('entry');
	}
});

// Controller - Views in index.html
App.EntriesController = Ember.ArrayController.extend({
	actions: {
		addEntry: function(){
			var ename=this.get('newEntryName');
			if (!ename.trim()) { return; }
			var entry = this.store.createRecord('entry', {
				name: ename,
				winner: false
			});
			this.set('newEntryName', '');
			entry.save();
		},

		drawWinner: function(){
			this.setEach('highlight', false); // http://emberjs.com/api/classes/Ember.Enumerable.html
			pool = this.rejectBy('winner', true); // http://emberjs.com/api/classes/Ember.Enumerable.html#method_rejectBy
			entry = pool[Math.floor(Math.random()*pool.length)]; // choose a random entry from pool
			console.log(pool); // see the pool reduce
			if(entry){
				entry.setProperties({'winner': true, 'highlight': true}); // multi-set of that random entry
				entry.save();
				console.log(entry); // _data.winner=true
			} else {
				console.log("Everybody has already been a winner!");
			}
		}
	}
});

// Model 
App.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'entries-emberjs'
});

App.Entry = DS.Model.extend({ // defines the model
	name: DS.attr('string'),
	winner: DS.attr('boolean'),
	didCreate: function(data){console.log(data.get("name")+' '+data.get("winner"));}
	// verify model created - http://emberjs.com/api/data/classes/DS.Model.html
});

App.Entry.Fixtures = // intial static data - but no persistence
[{
	id: 1,
	name: 'kip',
	winner: false
},{
	id: 2,
	name: 'tom',
	winner: false
},{
	id: 3,
	name: 'sue',
	winner: false
}, {
	id: 4,
	name: 'kate',
	winner: false
}]
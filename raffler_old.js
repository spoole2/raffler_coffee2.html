$(document).ready(function(){ //waits until the DOM is loaded
	$.getJSON('entries.json', function(data){
		Raffle.entries = data;
	}).done(function(){
		console.log(Raffle.entries);
		Raffle.setup();
	});
});

var Raffle = { //creates global Raffle object
	/*
	entries: new Array( //create intial array
		{id: 1, name: 'tom', winner: false},
		{id: 2, name: 'dick', winner: false},
		{id: 3, name: 'harry', winner: false},
		{id: 4, name: 'moe', winner: false}
	),*/
	entries: new Array(),

	setup: function(){
		$('#newvalue').on('click', this.newEntry); //set up live bindings to buttons
		$('#chooseit').on('click', this.drawWinner);

		this.reDraw(); //initial render, note it is a closure due to Raffle.setup()
	},

	newEntry: function(){ //add entry to list
		Raffle.entries.push({id: Raffle.entries.length+1, name: $('#nnew').val(), winner: false});
		//console.log(Raffle.entries.length+" "+Raffle.entries[4].name); //test push

		$("#nnew").val("");
		Raffle.reDraw(); //the 'this' prefix will not work here - see console.log(this);
	},

	reDraw: function() { //render array to winners section
		$('#winners').html(""); //clear out old render
		$.each(Raffle.entries, function(index, value){ //loop all entries

			var plug=(value.winner)?"WINNER":""; //if value eq winner then plug winner else leave blank
			$('#winners').append("<div class='entry-name'>" + value.name + "<span class='entry-winner'>" + plug + "</span>
				<button class='delete' id='" + index + "'>X</button></div>");
		});

		/* Question 3:  This must go in the reDraw function as the id is being passed in "value" allowing the id to 
		   be assigned dynamically.
		*/
		$('delete').click(function(){
			console.log(this.id); //refers to the index
			Raffle.entries.splice(this.id,1);

			Raffle.reDraw(); //need to redraw to show deletion
			});
	},

	drawWinner: function(){ //choose a random winner from the list
		$.each(Raffle.entries, function(i, entry){Raffle.entries[i].winner=false;}); //all false first

		var j = Math.floor(Math.random() * Raffle.entries.length); //random index for new winner
		Raffle.entries[j].winner=true; //set that entry to true so it displays

		console.log(Raffle.entries[j].name); //check winner

		Raffle.reDraw();
	},

};
var model = [
	{name: "roland", missed:12,ch:[]},
	{name: "williams", missed:12,ch:[]},
	{name: "Smudge", missed:12,ch:[]},
	{name: "camille", missed:12,ch:[]},
	{name: "Unknown", missed:12,ch:[]},
	{name: "Smudge", missed:12,ch:[]},
	{name: "camille", missed:12,ch:[]},
	{name: "Unknown", missed:12,ch:[]},
	{name: "josephine", missed:12,ch:[] }
];


var student = function(data) {

	var number_day = 12;
	this.name = ko.observable(data.name);
	this.missed = ko.observable(data.missed);
    this.ch = ko.observableArray(data.ch);
    this.missed = ko.computed(function(){
   
      return number_day - this.ch().length;
  
  }, this);
}

var ViewModel = function() {
	var self = this;
	self.students = ko.observableArray([]);
	model.forEach(function(item){
		self.students.push( new student(item) );
	});

};

ko.applyBindings(new ViewModel())

	
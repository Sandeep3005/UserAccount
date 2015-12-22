var managerData = 
	{
			itemID		: "",
			fName 		: "John",
			lName 		: "Doe",
			unit			: "NA",
			street1 	: "100 East 25th Street",
			street2 	: " ",
			city			: "San Diego",
			state 		: "California",
			zip 			: "92108",
			password  : "testPass",			
			email     : "JohnAdoe@gmail.com",
			phone   	: "6192695136",
			type			: "ADMIN",
			firstLogin: "NA",
			idVerify 	: "NA",
			adminVerify : "NA" 

};

Template.hello.events({

	'click #testBtn':function(evt,tmpl)
	{
			alert(Meteor.userId());
			Meteor.call('updateUserMethod',Meteor.userId(),managerData,function(err,id)
				{
					if(err)
						return alert(err.reason);
				});
	}
	
});
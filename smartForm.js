// Your jQuery goes here

var userData = {

	name:"",
	email:"",
	html:{likes:[], dislikes[]},
	css:{likes:[],dislikes[]},
	js:{likes:[],dislikes[]},
	skills:{html:"" ,css:"", js:"",}



};
$("#startbtn").click(function(event){
	console.log("start clicked")
	$("welcome").hide();
	$("#q1").show();


});
$(#name).change(function(event){
	console.log($("#name").val());
	if($("#name").val()){
      userData.name=$("name").val();

	}

)};
$("#email").change(function(event){


});

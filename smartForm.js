// Your jQuery goes here

var userData = {

	name:"",
	email:"",
	html:{likes:[], dislikes:[]},
	css:{likes:[],dislikes:[]},
	js:{likes:[],dislikes:[]},
	skills:{html:"" ,css:"", js:""},
  surveyState: 0


};




//window.localStorage.userData=JSON.stringify(userData);
//onsole.log(localStorage.userData);
//var testData
if(window.localStorage.userData){
 userData=  JSON.parse(window.localStorage.userData);

}

$("#startbtn").click(function(event){
	console.log("start clicked")
	$("welcome").hide();
	$("#q1").show();


});
$("#name").change(function(event){
	console.log($("#name").val());
	if($("#name").val()){
      userData.name=$("#name").val();
     window.localStorage.userData=JSON.stringify(userData);
	}

});
$("#email").change(function(event){


});

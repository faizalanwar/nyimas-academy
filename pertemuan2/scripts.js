
	 // console.log('Hello World! ');


	 // //----------------Type data-------------------//

	 // //aray
	 // var array= ['reading','swimming','fighting']
	 // console.log(array[0]);


	 // //object
	 // var object={
	 // 	nama: 'faizal anwar',
	 // 	school: 'stikom poltek cirebon',
	 // 	age:20,
	 // 	hobbies:['reading','swimming','badminton'],
	 // }
	 // console.log(object['hobbies'][1]);


	 // //if else
	 // var value=8;
	 // if (value>8) {
	 // 	console.log('Amazing');
	 // }
	 // else{
	 // 	console.log('Wooops !');
	 // }


	 // //for loop
	 // for (var i = 0; i <= 10; i++) {
	 // 	console.log(i);
	 // }        


	 // //----------------Function-------------------//

	 // function sayHello(){
	 // 	console.log('Hello from js');
	 // }
	 // sayHello();


	 // //----------------Event Driven-------------------//

	 // var buttonElement = document.getElementById('myButton');
	 // 	buttonElement.onclick = function(){
	 // 		alert('clicked');
	 // 	};
	 // var buttonElement = document.getElementById('myButton2');
	 // 	buttonElement.addEventListener('click', function(){
	 // 		alert('clicked button 2');
	 // 	});



	 // //--------------Document Object Model----------------//

	 // var textElement = document.getElementById('text');
	 // document.getElementById('myButton').addEventListener('click', function(){
	 // 	textElement.style.visibility='hidden';
	 // });
	 // document.getElementById('myButton2').addEventListener('click', function(){
	 // 	 textElement.style.visibility='visible';	
	 // });



	 // with jquery

	 // $(document).ready(function(){
	 // 	$("#myButton").click(function(){
	 // 		$("#text").hide();
	 // 	});
	 // 	$("#myButton2").click(function(){
	 // 		$("#text").show();
	 // 	});
	 // });

 document.getElementById('submit').addEventListener('click',function(){

	 var nama= document.getElementById('nama').value;	 
	 var email= document.getElementById('email').value;
	 var pesan= document.getElementById('pesan').value;
	 var htmlTemplate =`
		 <ul>
		 	<li>Nama : ${nama}</li>
		 	<li>email : ${email}</li>
		 	<li>pesan : ${pesan}</li>
		 </ul>
		 `
	
	var oldValue = document.getElementById('guestbook').innerHTML;
	document.getElementById('guestbook').innerHTML = oldValue + htmlTemplate;
});
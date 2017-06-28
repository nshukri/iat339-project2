// source: https://codepen.io/nxworld/pen/OyRrGy?editors=0110
$(document).ready(function() {
	$('#arrow').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
		console.log("scroll")
	});

	$('#review-open').on('click', function(e)  {
	    $('.item-reviews').css({
	        'left': '0'
	    });
	    console.log("review open");
	});

});

//onclick in index.html when user click my account
function loginPanel () {
   var login = document.getElementById("login-panel");
   login.style.visibility = "visible";
   console.log("test login");
}

function loginClose () {
   var login = document.getElementById("login-panel");
   login.style.visibility = "hidden";
   console.log("test login");
}


// ONlick functions in Menu.html

//functions for food item 1 in Menu.html
function reviewOpen1() {
   var review = document.getElementById("itemReview-1");
   review.style.left = "0";

   var content = document.getElementById('foodContent-1');
   content.style.left = "-200%";
 }


 function backContent1() {
 	var review = document.getElementById('itemReview-1');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-1');
   content.style.left = "0";

 }

//source: https://www.w3schools.com/jsref/event_onmouseout.asp
 function resetContent1() {
 	var review = document.getElementById('itemReview-1');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-1');
   content.style.left = "0";
}


//functions for food item 2 in Menu.html
function reviewOpen2() {
   var review = document.getElementById("itemReview-2");
   review.style.left = "0";

   var content = document.getElementById('foodContent-2');
   content.style.left = "-200%";
 }


 function backContent2() {
 	var review = document.getElementById('itemReview-2');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-2');
   content.style.left = "0";

 }

 function resetContent2() {//source: https://www.w3schools.com/jsref/event_onmouseout.asp
 	var review = document.getElementById('itemReview-2');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-2');
   content.style.left = "0";
}


//functions for food item 3 in Menu.html
function reviewOpen3() {
   var review = document.getElementById("itemReview-3");
   review.style.left = "0";

   var content = document.getElementById('foodContent-3');
   content.style.left = "-200%";
 }


 function backContent3() {
 	var review = document.getElementById('itemReview-3');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-3');
   content.style.left = "0";

 }

 function resetContent3() {//source: https://www.w3schools.com/jsref/event_onmouseout.asp
 	var review = document.getElementById('itemReview-3');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-3');
   content.style.left = "0";
}


//functions for food item 4 in Menu.html
function reviewOpen4() {
   var review = document.getElementById("itemReview-4");
   review.style.left = "0";

   var content = document.getElementById('foodContent-4');
   content.style.left = "-200%";
 }


 function backContent4() {
 	var review = document.getElementById('itemReview-4');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-4');
   content.style.left = "0";

 }

 function resetContent4() {//source: https://www.w3schools.com/jsref/event_onmouseout.asp
 	var review = document.getElementById('itemReview-4');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-4');
   content.style.left = "0";
}


//functions for food item 5 in Menu.html
function reviewOpen5() {
   var review = document.getElementById("itemReview-5");
   review.style.left = "0";

   var content = document.getElementById('foodContent-5');
   content.style.left = "-200%";
 }


 function backContent5() {
 	var review = document.getElementById('itemReview-5');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-5');
   content.style.left = "0";

 }

 function resetContent5() {//source: https://www.w3schools.com/jsref/event_onmouseout.asp
 	var review = document.getElementById('itemReview-5');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-5');
   content.style.left = "0";
}



//functions for food item 6 in Menu.html
function reviewOpen6() {
   var review = document.getElementById("itemReview-6");
   review.style.left = "0";

   var content = document.getElementById('foodContent-6');
   content.style.left = "-200%";
 }


 function backContent6() {
 	var review = document.getElementById('itemReview-6');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-6');
   content.style.left = "0";

 }

 function resetContent6() {//source: https://www.w3schools.com/jsref/event_onmouseout.asp
 	var review = document.getElementById('itemReview-6');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-6');
   content.style.left = "0";
}

//functions for food item 7 in Menu.html
function reviewOpen7() {
   var review = document.getElementById("itemReview-7");
   review.style.left = "0";

   var content = document.getElementById('foodContent-7');
   content.style.left = "-200%";
 }


 function backContent7() {
 	var review = document.getElementById('itemReview-7');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-7');
   content.style.left = "0";

 }

 function resetContent7() {//source: https://www.w3schools.com/jsref/event_onmouseout.asp
 	var review = document.getElementById('itemReview-7');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-7');
   content.style.left = "0";
}


//functions for food item 8 in Menu.html
function reviewOpen8() {
   var review = document.getElementById("itemReview-8");
   review.style.left = "0";

   var content = document.getElementById('foodContent-8');
   content.style.left = "-200%";
 }


 function backContent8() {
 	var review = document.getElementById('itemReview-8');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-8');
   content.style.left = "0";

 }

 function resetContent8() {//source: https://www.w3schools.com/jsref/event_onmouseout.asp
 	var review = document.getElementById('itemReview-8');
   review.style.left = "100%";

   var content = document.getElementById('foodContent-8');
   content.style.left = "0";
}

function changeColor() {
   var plan = document.getElementById("plan-one")
   plan.style.backgroundColor = 'red'; /*test*/

   if (getPlan() == '1') {
      var plan = document.getElementById("plan-one")
      plan.style.backgroundColor = 'green'; /*test*/
   }
}

function getPlan() {
   var params = {};
   var param_array = window.location.split('?')[1].split('&');

   for (va i in param_array) {
      x = param_array[1].split('=');
      params[x[0]] = x[1];
   } 
   return params;
}


/*https://stackoverflow.com/questions/26937424/change-button-color-onclick

var count = 1;
function changeColor2() {
      if (count == 0) {
         document.getElementById("plan-one").style.backgroundColor='#eeeeee'
         count = 1;
      } else {
         document.getElementById("plan-one").style.backgroundColor='#efc88b'
         count = 0;
      }
   }

*/

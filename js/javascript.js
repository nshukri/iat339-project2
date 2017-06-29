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

   var nav = document.getElementById("nav-links");
   nav.style.height = "0";

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
//End of Menu.html javascript



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

//our plan.html

//get function source:https://stackoverflow.com/questions/12929140/getting-url-data-with-javascript-split-it-like-php-get
// window.params = function(){
//    var params = {};
//    var param_array = window.location.split('?')[1].split('&');

//    for (var i in param_array) {
//       x = param_array[1].split('=');
//       params[x[0]] = x[1];
//    } 
//    return params;
// }

// if(window.params.plan == 1) {
//    console.log("plan 1");
//    plan1Selected();

// }

//change color of chosen plan
function plan1Selected() {
    var plan1 = document.getElementById("plan-1-content");
    plan1.style.backgroundColor = "#e4fde1";
}



//food-review page
//1 star
function star1(){
   var star1 = document.getElementById("full-star1");
   var star2 = document.getElementById("full-star2");
   var star3 = document.getElementById("full-star3");
   var star4 = document.getElementById("full-star4");
   var star5 = document.getElementById("full-star5");
   // 
   var opacity = star1.style.opacity;
   // console.log (opacity)
   ;
   if (opacity == 0) {
      star1.style.opacity = "1";
   }
   else if (opacity == 1) {
      star1.style.opacity = "0";
      star2.style.opacity = "0";
      star3.style.opacity = "0";
      star4.style.opacity = "0";
      star5.style.opacity = "0";
      // console.log("test star 2");
   }
}

//star 2
function star2(){
   var star1 = document.getElementById("full-star1");
   var star2 = document.getElementById("full-star2");
   var star3 = document.getElementById("full-star3");
   var star4 = document.getElementById("full-star4");
   var star5 = document.getElementById("full-star5");
   // 
   var opacity = star2.style.opacity;
   // console.log (opacity)
   ;
   if (opacity == 0) {
      star1.style.opacity = "1";
      star2.style.opacity = "1";
   }
   else if (opacity == 1) {
      star3.style.opacity = "0";
      star4.style.opacity = "0";
      star5.style.opacity = "0";
      // console.log("test star 2");
   }
}

//star 3
function star3(){
   var star1 = document.getElementById("full-star1");
   var star2 = document.getElementById("full-star2");
   var star3 = document.getElementById("full-star3");
   var star4 = document.getElementById("full-star4");
   var star5 = document.getElementById("full-star5");
   // 
   var opacity = star3.style.opacity;
   // console.log (opacity)
   ;
   if (opacity == 0) {
      star1.style.opacity = "1";
      star2.style.opacity = "1";
      star3.style.opacity = "1";
   }
   else if (opacity == 1) {
      star4.style.opacity = "0";
      star5.style.opacity = "0";
      // console.log("test star 2");
   }
}


//star 4
function star4(){
   var star1 = document.getElementById("full-star1");
   var star2 = document.getElementById("full-star2");
   var star3 = document.getElementById("full-star3");
   var star4 = document.getElementById("full-star4");
   var star5 = document.getElementById("full-star5");
   // 
   var opacity = star4.style.opacity;
   // console.log (opacity)
   ;
   if (opacity == 0) {
      star1.style.opacity = "1";
      star2.style.opacity = "1";
      star3.style.opacity = "1";
      star4.style.opacity = "1";
   }
   else if (opacity == 1) {
      star5.style.opacity = "0";
      // console.log("test star 2");
   }
}

//star 5
function star5(){
   var star1 = document.getElementById("full-star1");
   var star2 = document.getElementById("full-star2");
   var star3 = document.getElementById("full-star3");
   var star4 = document.getElementById("full-star4");
   var star5 = document.getElementById("full-star5");
   // 
   var opacity = star5.style.opacity;
   // console.log (opacity)
   ;
   if (opacity == 0) {
      star1.style.opacity = "1";
      star2.style.opacity = "1";
      star3.style.opacity = "1";
      star4.style.opacity = "1";
      star5.style.opacity = "1";
   }
   else if (opacity == 1) {
      star5.style.opacity = "0";
      // console.log("test star 2");
   }
}

// show form submitted when user press Submit button in food-review.html
function reviewSubmit() {
   var showReviewForm = document.getElementById("review-submitted");
   showReviewForm.style.visibility = "visible";

   var hideReviewForm = document.getElementById("review-form");
   hideReviewForm.style.visibility = "hidden";

}

//submission on contact page
function contactSubmit() {
   var showSubmitMessage = document.getElementById("contact-submit");
   showSubmitMessage .style.visibility = "visible";

   var hideReviewForm = document.getElementById("contact-info");
   hideReviewForm.style.visibility = "hidden";

}

//register page
function plan1(){
   var plan1 = document.getElementById("plan-1-content");
   var plan2 = document.getElementById("plan-2-content");
   var plan3 = document.getElementById("plan-3-content");
   var plan4 = document.getElementById("plan-4-content");
   
   var btn1 = document.getElementById("select-button-1");
   var btn2 = document.getElementById("select-button-2");
   var btn3 = document.getElementById("select-button-3");
   var btn4 = document.getElementById("select-button-4");

   plan1.style.backgroundColor = "#efc88b";
   btn1.style.backgroundColor = "#596068";

   plan2.style.backgroundColor = "white";
   btn2.style.backgroundColor = "#cf5c36";

   plan3.style.backgroundColor = "white";
   btn3.style.backgroundColor = "#cf5c36";

   plan4.style.backgroundColor = "white";
   btn4.style.backgroundColor = "#cf5c36";
}

function plan2(){
   var plan1 = document.getElementById("plan-1-content");
   var plan2 = document.getElementById("plan-2-content");
   var plan3 = document.getElementById("plan-3-content");
   var plan4 = document.getElementById("plan-4-content");
   
   var btn1 = document.getElementById("select-button-1");
   var btn2 = document.getElementById("select-button-2");
   var btn3 = document.getElementById("select-button-3");
   var btn4 = document.getElementById("select-button-4");

   plan2.style.backgroundColor = "#efc88b";
   btn2.style.backgroundColor = "#596068";

   plan1.style.backgroundColor = "white";
   btn1.style.backgroundColor = "#cf5c36";

   plan3.style.backgroundColor = "white";
   btn3.style.backgroundColor = "#cf5c36";

   plan4.style.backgroundColor = "white";
   btn4.style.backgroundColor = "#cf5c36";
   
   /*var i = 0;
   while (i < 5 && i != 2) {
      plan[i].style.backgroundColor = "white";
      plan[i].style.border = "1px solid #eee";
      btn[i].style.backgroundColor = "#cf5c36";
   }

   plan2.style.backgroundColor = "#efc88b";
   plan2.style.border = "none";
   btn2.style.backgroundColor = "#596068";

   for (i = 1; i < 5; i++) {
      if (i != 2) {
         plan[i].style.backgroundColor = "white";
         plan[i].style.border = "1px solid #eee";
         btn[i].style.backgroundColor = "#cf5c36";
      }
   }*/
}

function plan3(){
   var plan1 = document.getElementById("plan-1-content");
   var plan2 = document.getElementById("plan-2-content");
   var plan3 = document.getElementById("plan-3-content");
   var plan4 = document.getElementById("plan-4-content");
   
   var btn1 = document.getElementById("select-button-1");
   var btn2 = document.getElementById("select-button-2");
   var btn3 = document.getElementById("select-button-3");
   var btn4 = document.getElementById("select-button-4");

   plan3.style.backgroundColor = "#efc88b";
   btn3.style.backgroundColor = "#596068";

   plan1.style.backgroundColor = "white";
   btn1.style.backgroundColor = "#cf5c36";

   plan2.style.backgroundColor = "white";
   btn2.style.backgroundColor = "#cf5c36";

   plan4.style.backgroundColor = "white";
   btn4.style.backgroundColor = "#cf5c36";
}

function plan4(){
   var plan1 = document.getElementById("plan-1-content");
   var plan2 = document.getElementById("plan-2-content");
   var plan3 = document.getElementById("plan-3-content");
   var plan4 = document.getElementById("plan-4-content");
   
   var btn1 = document.getElementById("select-button-1");
   var btn2 = document.getElementById("select-button-2");
   var btn3 = document.getElementById("select-button-3");
   var btn4 = document.getElementById("select-button-4");

   plan4.style.backgroundColor = "#efc88b";
   btn4.style.backgroundColor = "#596068";

   plan1.style.backgroundColor = "white";
   btn1.style.backgroundColor = "#cf5c36";

   plan2.style.backgroundColor = "white";
   btn2.style.backgroundColor = "#cf5c36";

   plan3.style.backgroundColor = "white";
   btn3.style.backgroundColor = "#cf5c36";
}
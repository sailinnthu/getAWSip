var serviceHeadLine = document.getElementById("serviceHeadLine");
// ROUTE53
var infoContainer = document.getElementById("info");

var btn = document.getElementById("btn");

btn.addEventListener("click", function(){

//XMLHttpRequest will establish the connection with the URL, and it will send/receive data 
var ourRequest = new XMLHttpRequest();

//Use GET to receive data
ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');

ourRequest.onload = function(){
	
	var ourData = JSON.parse(ourRequest.responseText);


		// console.log(ourData.prefixes[i]);
		renderHTML(ourData, 'ROUTE53');
		//renderHTML(ourData);
		
	// console.log(ourData);
	// console.log(ourData.prefixes[0]);
	// console.log(ourData.prefixes.length);
	// console.log(ourData.ipv6_prefixes.length);
	
};
ourRequest.send();

});

// function renderRoute53HTML(data){
	
// 	var htmlString = "";
// 	for (var i=0; i < data.prefixes.length; i++) {
// 		if (data.prefixes[i].service === "ROUTE53"){
			
// 			htmlString += "<p>ROUTE53: " + data.prefixes[i].ip_prefix + " : " + data.prefixes[i].region + "</p>";
			
// 		};
// 	};
	
// 	//infoContainer.insertAdjacentHTML('afterend', htmlString);
// 	infoContainer.innerHTML = htmlString;
// };

// EC2 
// var ec2Container = document.getElementById("ec2info");
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);

		renderHTML(ourData,'EC2');
		
	};
	ourRequest.send();
});

// function renderEC2HTML(data){
	
// 	var htmlString = "";
// 	for (var i=0; i < data.prefixes.length; i++) {
// 		if (data.prefixes[i].service === "EC2") {
			
// 			htmlString += "<p>EC2: " + data.prefixes[i].ip_prefix + " : " + data.prefixes[i].region + "</p>";

// 		};
// 	};
	
// 	//infoContainer.insertAdjacentHTML('afterend', htmlString);
// 	infoContainer.innerHTML = htmlString;
// };

// CLOUDFRONT
// var cloudFrontContainer = document.getElementById("cloudfrontinfo");
var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		
		renderHTML(ourData,'CLOUDFRONT');
		
	};
	ourRequest.send();
});

// function renderCloudFrontHTML(data){
// 	var htmlString = "";
// 	for (var i=0; i < data.prefixes.length; i++) {
// 		if (data.prefixes[i].service === "CLOUDFRONT") {
// 			htmlString += "<p>CLOUDFRONT: " + data.prefixes[i].ip_prefix + " : " + data.prefixes[i].region + "</p>";
// 		};
// 	};
// 	//infoContainer.insertAdjacentHTML('afterend', htmlString);
// 	infoContainer.innerHTML = htmlString;
// };

// ROUTE53_HEALTHCHECKS
// var route53HealthContainer = document.getElementById("route53healthinfo");
var btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData,'ROUTE53_HEALTHCHECKS');
		
	};
	ourRequest.send();
});

// function renderRoute53HealthHTML(data){
// 	var htmlString = "";
// 	for (var i=0; i < data.prefixes.length; i++) {
// 		if (data.prefixes[i].service === "ROUTE53_HEALTHCHECKS") {
			
// 			htmlString += "<p>ROUTE53 HEALTHCHECKS: " + data.prefixes[i].ip_prefix + " : " + data.prefixes[i].region + "</p>";
			
// 		};
// 	};
// 	//infoContainer.insertAdjacentHTML('afterend', htmlString);
// 	infoContainer.innerHTML = htmlString;
// };

// S3
// var s3Container = document.getElementById("s3info");
var btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);

		renderHTML(ourData,'S3');
		

	};
	ourRequest.send();
});

// function renderS3HTML(data){
// 	var htmlString = "";
// 	for (var i=0; i < data.prefixes.length; i++) {
// 		if (data.prefixes[i].service === "S3") {
			
// 			htmlString += "<p>S3: " + data.prefixes[i].ip_prefix + " : " + data.prefixes[i].region + "</p>";
			
// 		};
// 	};
// 	//infoContainer.insertAdjacentHTML('afterend', htmlString);
// 	infoContainer.innerHTML = htmlString;
// };

// AMAZON
// var amazonContainer = document.getElementById("amazoninfo");
var btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);

		renderHTML(ourData,'AMAZON');
		

	};
	ourRequest.send();
});

// function renderAmazonHTML(data){
// 	var htmlString = "";
// 	for (var i=0; i < data.prefixes.length; i++) {
// 		if (data.prefixes[i].service === "AMAZON") {
			
// 			htmlString += "<p>AMAZON: " + data.prefixes[i].ip_prefix + " : " + data.prefixes[i].region + "</p>";
			
// 		};
// 	};
// 	//infoContainer.insertAdjacentHTML('afterend', htmlString);
// 	infoContainer.innerHTML = htmlString;
// };



function renderHTML(data, serviceType){
	var htmlString = "";
	var hasData = false;
	console.log(serviceType);
	for (var i=0; i < data.prefixes.length; i++) {
		if (data.prefixes[i].service === serviceType){
			hasData = true;
			htmlString += "<p>IPv4: " + data.prefixes[i].ip_prefix + " : REGION: " + data.prefixes[i].region + "</p>";
			serviceHeadLine.innerHTML = "IPv4 for : " + serviceType;
		};
	};

	if (!hasData) {
		alert('There are no available IPv4 Addresses for ' + serviceType + ' at this moment!');
		serviceHeadLine.innerHTML = "Click Service Type";
	};

	infoContainer.innerHTML = htmlString;
	
};


/////////////////////////
// Code for IPv6 Section
var btn7 = document.getElementById("btn7");
btn7.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);

		renderIpv6HTML(ourData,'ROUTE53');
		
		
	};
	ourRequest.send();
});

var btn8 = document.getElementById("btn8");
btn8.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);

		renderIpv6HTML(ourData,'EC2');
		
	};
	ourRequest.send();
});

var btn9 = document.getElementById("btn9");
btn9.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);

		renderIpv6HTML(ourData,'CLOUDFRONT');
		
		
	};
	ourRequest.send();
});

var btn10 = document.getElementById("btn10");
btn10.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);

		renderIpv6HTML(ourData,'ROUTE53_HEALTHCHECKS');
		
	};
	ourRequest.send();
});

var btn11 = document.getElementById("btn11");
btn11.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);

		renderIpv6HTML(ourData,'S3');
		
	};
	ourRequest.send();
});

var btn12 = document.getElementById("btn12");
btn12.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);

		renderIpv6HTML(ourData,'AMAZON');
		
	};
	ourRequest.send();
});

function renderIpv6HTML(data, serviceType){
	var htmlString = "";
	var hasData = false;
	var header = "Click Service Type";
	for (var i=0; i < data.ipv6_prefixes.length; i++) {
		if (data.ipv6_prefixes[i].service === serviceType){
			hasData = true;
			htmlString += "<p>IPv6: " + data.ipv6_prefixes[i].ipv6_prefix + " : REGION: " + data.ipv6_prefixes[i].region + "</p>";
			header = "IPv6 for : " + serviceType;
		};
	};

	if (!hasData) {
		alert('There are no available IPv6 Addresses for ' + serviceType + ' at this moment!');
	};
	serviceHeadLine.innerHTML = header;
	infoContainer.innerHTML = htmlString;
	
};





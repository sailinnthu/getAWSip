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
		
		renderRoute53HTML(ourData);
		
	// console.log(ourData);
	// console.log(ourData.prefixes[0]);
	// console.log(ourData.prefixes.length);
	// console.log(ourData.ipv6_prefixes.length);
	
};
ourRequest.send();

});

function renderRoute53HTML(data){
	
	var htmlString = "";
	for (var i=0; i < data.prefixes.length; i++) {
		if (data.prefixes[i].service === "ROUTE53"){
			
			htmlString += "<p>ROUTE53: " + data.prefixes[i].ip_prefix + " : " + data.prefixes[i].region + "</p>";
			
		};
	};
	
	infoContainer.insertAdjacentHTML('afterend', htmlString);
};

// EC2 
// var ec2Container = document.getElementById("ec2info");
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);

		renderEC2HTML(ourData);
		
	};
	ourRequest.send();
});

function renderEC2HTML(data){
	
	var htmlString = "";
	for (var i=0; i < data.prefixes.length; i++) {
		if (data.prefixes[i].service === "EC2") {
			
			htmlString += "<p>EC2: " + data.prefixes[i].ip_prefix + " : " + data.prefixes[i].region + "</p>";

		};
	};
	
	infoContainer.insertAdjacentHTML('afterend', htmlString);
};

// CLOUDFRONT
// var cloudFrontContainer = document.getElementById("cloudfrontinfo");
var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		
		renderCloudFrontHTML(ourData);
		
	};
	ourRequest.send();
});

function renderCloudFrontHTML(data){
	var htmlString = "";
	for (var i=0; i < data.prefixes.length; i++) {
		if (data.prefixes[i].service === "CLOUDFRONT") {
			htmlString += "<p>CLOUDFRONT: " + data.prefixes[i].ip_prefix + " : " + data.prefixes[i].region + "</p>";
		};
	};
	infoContainer.insertAdjacentHTML('afterend', htmlString);
};

// ROUTE53_HEALTHCHECKS
// var route53HealthContainer = document.getElementById("route53healthinfo");
var btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		renderRoute53HealthHTML(ourData);
		
	};
	ourRequest.send();
});

function renderRoute53HealthHTML(data){
	var htmlString = "";
	for (var i=0; i < data.prefixes.length; i++) {
		if (data.prefixes[i].service === "ROUTE53_HEALTHCHECKS") {
			
			htmlString += "<p>ROUTE53 HEALTHCHECKS: " + data.prefixes[i].ip_prefix + " : " + data.prefixes[i].region + "</p>";
			
		};
	};
	infoContainer.insertAdjacentHTML('afterend', htmlString);
};

// S3
// var s3Container = document.getElementById("s3info");
var btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);

		renderS3HTML(ourData);
		

	};
	ourRequest.send();
});

function renderS3HTML(data){
	var htmlString = "";
	for (var i=0; i < data.prefixes.length; i++) {
		if (data.prefixes[i].service === "S3") {
			
			htmlString += "<p>S3: " + data.prefixes[i].ip_prefix + " : " + data.prefixes[i].region + "</p>";
			
		};
	};
	infoContainer.insertAdjacentHTML('afterend', htmlString);
};

// AMAZON
// var amazonContainer = document.getElementById("amazoninfo");
var btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://ip-ranges.amazonaws.com/ip-ranges.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);

		renderAmazonHTML(ourData);
		

	};
	ourRequest.send();
});

function renderAmazonHTML(data){
	var htmlString = "";
	for (var i=0; i < data.prefixes.length; i++) {
		if (data.prefixes[i].service === "AMAZON") {
			
			htmlString += "<p>AMAZON: " + data.prefixes[i].ip_prefix + " : " + data.prefixes[i].region + "</p>";
			
		};
	};
	infoContainer.insertAdjacentHTML('afterend', htmlString);
};


//import api config file
//<script type='text/javascript' src='config.js'></script>

const token = config.MY_API_TOKEN;
const key = config.SECRET_API_KEY;


document.getElementById("button").addEventListener('click', function () {
	const fname = document.getElementById('firstName').value;
	const sname = document.getElementById('secondName').value;

	return fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${fname}&fname=${sname}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": `${token}`,
			"x-rapidapi-key": `${key}`
		}
		})
		.then(response => response.json())
		.then(result => console.log(result))  
});
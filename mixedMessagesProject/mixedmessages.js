/* This project will print a random message predicting who will win the English Premier League between 2030 and 2130
and confirm the winning points total */

// Storing all possible teams in an array
const teams = ['Accrington Stanley', 'AFC Bournemouth', 'AFC Wimbledon', 'Arsenal', 'Aston Villa',
	           'Barnsley', 'Barrow', 'Birmingham City', 'Blackburn Rovers', 'Blackpool', 'Bolton Wanderers', 'Bradford City', 'Brentford', 'Brighton & Hove Albion', 'Bristol City', 'Bristol Rovers', 'Burnley', 'Burton Albion',
	           'Cambridge United', 'Cardiff City', 'Carlisle United', 'Charlton Atheltic', 'Chelsea', 'Cheltenham Town', 'Colchester United', 'Coventry City', 'Crawley Town', 'Crewe Alexandra', 'Crystal Palace',
	           'Derby County', 'Doncaster Rovers',
	           'Everton', 'Exeter City',
	           'Fleetwood Town', 'Forest Green Rovers', 'Fulham',
	           'Gillingham', 'Grimsby Town',
	           'Harrogate Town', 'Huddersfield Town', 'Hull City',
	           'Ipswich Town',
	           'Leeds United', 'Leicester City', 'Leyton Orient', 'Lincoln City', 'Liverpool', 'Luton Town',
	           'Manchester City', 'Manchester United', 'Mansfield Town', 'Middlesbrough', 'Millwall', 'MK Dons', 'Morecambe',
	           'Newcastle United', 'Newport County', 'Northampton Town', 'Norwich City', 'Nottingham Forest', 'Notts County',
	           'Oxford United',
	           'Peterborough United', 'Plymouth Argyle', 'Port Vale', 'Portsmouth', 'Preston North End',
	           'Queens Park Rangers',
	           'Reading', 'Rotherham United',
	           'Salford City', 'Sheffield United', 'Sheffield Wednesday', 'Shrewsbury Town', 'Southampton', 'Stevenage', 'Stockport County', 'Stoke City', 'Sunderland', 'Sutton United', 'Swansea City', 'Swindon Town',
	           'Tottenham Hotspur', 'Tranmere Rovers',
	           'Wallsall', 'Watford', 'West Bromwich Albion', 'West Ham United', 'Wigan Athletic', 'Wolverhampton Wanderers', 'Wrexham', 'Wycombe Wanderers'];

// Function to return array with all years between 2030 and 2130
const yearsFunction = () => {
	let array = [];
	for (i = 2030; i < 2131; i++) {
		array.push(i);
	}
	return array;
}

// Storing the years array as a new variable
const years = yearsFunction();

// Function to store all possible points tallies
const pointsFunction = () => {
	let array = [];
	for (i = 70; i < 114; i++) {
		array.push(i);
	}
	return array;
}

// Storing the points function as a new variable
const points = pointsFunction();

// Function to return the message
const leagueWinner = () => {
	// Randomising the team
	let randomTeam = teams[Math.floor(Math.random() * teams.length)];

	// Randomising the year
	let randomYear = years[Math.floor(Math.random() * years.length)];

	//Randomising the points tally
	let randomPoints = points[Math.floor(Math.random() * points.length)];

	// Reurning the final message
	return `In the year ${randomYear}, ${randomTeam} will be crowned Champions of England with a points tally of ${randomPoints}.`;
}

console.log(leagueWinner());
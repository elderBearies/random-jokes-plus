const utils = require('./utils');

const jokes = [{ q: 'What do you call a very small valentine?', a: 'A valen-tiny!' }, { q: 'What did the dog say when he rubbed his tail on the sandpaper?', a: 'Ruff, Ruff!' }, { q: "Why don't sharks like to eat clowns?", a: 'Because they taste funny!' }, { q: 'What did the fish say when be bumped his head?', a: 'Dam!' }, { q: 'Why did the drunk walk into the bar?', a: "He couldn't see it coming!" }, { q: "What's worse than a stick in the eye?", a: 'A stick in each eye.' }, { q: 'I keep trying to lose weight.', a: 'It keeps finding me.' }, { q: "I know a guy who's really good at Russian Roulette...", a: "He's only lost once!" }, { q: 'What do you get a man with no elbows?', a: 'Elbows.' }, { q: "What is a duck's favorite drug?", a: 'Quack cocaine!' }, { q: "What do you call a boomerang that doesn't come back?", a: 'A stick.' }, { q: "I don't usually like cooking with fresh herbs...", a: "But this thyme... It's different." }, { q: 'Do you wanna hear a knock-knock joke?', a: 'Two guys walk into a bar.' }, { q: 'I tried to kill a spider with soap?', a: 'He got away clean.' }, { q: 'What do you call a time traveling bounty hunter?', a: 'A ManDelorean!' }, { q: "What's red and bad for your teeth?", a: 'A brick.' }, { q: 'What do you call a belt made of watches?', a: 'A waist of time!' }, { q: "What's the best way to carve wood?", a: 'Whittle by whittle!' }, { q: 'Why was 6 afraid of 7?', a: 'Because 7 was a registered 6 offender!' }]; // oh boy raw pasted json! can't wait to learn how to use a proper database because this is fucking disgusting.

// i opted to make the behavior of the endpoints identical
// params.limit defaults to 1 anyway if there's nothing passed in through the url
const getRandomJokeResponse = (request, response, params) => {
  response.writeHead(200, { 'Content-Type': 'application/JSON' });
  response.write(JSON.stringify(utils.getRandomArrItems(jokes, params.limit)));
  response.end();
};

module.exports.getRandomJokeResponse = getRandomJokeResponse;

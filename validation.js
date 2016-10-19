'use strict';
const request = require('request');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let inpHash = process.argv[2];
if (!inpHash) throw new Error("Please specify hash as first argument");
let inpPhone = process.argv[3] || false;
let defaultUrl = function(hash) {
	return `https://m.vk.com/login?act=security_check&api_hash=${hash}`
};
let confirmUrl = function(hash,api_hash) {
	return `https://m.vk.com/login.php?act=security_check&to=&hash=${hash}&api_hash=${api_hash}`
};
let regexp = /act=security_check&to=&hash=(.*)&api_hash=(.*)"/g;
let confirm = function(code) {
	request.post(confirmUrl(match[1], match[2]), {form: {code: code} }, function(error, response, body) {
		if (error) return console.log(error);
		console.log("Validation finished.");
		process.exit();
	});
}
request(defaultUrl(inpHash), function(error, response, body) {
	if (error) return console.log(error);
	var match = regexp.exec(body);
	if (!match) throw new Error("Cant find hashes, probably session expired");
	if (inpPhone) return confirm(inpPhone);
	rl.question('Input phone code:\n', function(code) {
		confirm(code);
		rl.close();
	});
});

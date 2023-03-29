module.exports.getAllUsers = (req, res, next) => {
	const { ip, query, params, body, headers } = req;
	console.log(ip, query, params, body, headers);

	// res.download(__dirname + "/users.controllers.js");
	// res.json({ name: "abc" });
	res.redirect("/login");
};

module.exports.saveAUser = (req, res) => {};

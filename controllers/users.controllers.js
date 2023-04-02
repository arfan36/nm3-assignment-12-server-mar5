const tools = [
	{ id: 1, name: "Hammer" },
	{ id: 2, name: "Hammer2" },
	{ id: 3, name: "Hammer3" },
];

module.exports.getAllUsers = (req, res, next) => {
	const { limit, page } = req.query;
	console.log("limit, page :>> ", limit, page);
	res.json(tools.slice(0, limit));
};

module.exports.saveAUser = (req, res) => {
	console.log(req.query);
	tools.push(req.query);
	res.send(tools);
};

module.exports.getUserDetail = (req, res) => {
	const { id } = req.params;
	console.log("🚀 ~ id:", id);
	// const filter = {_id: id}
	const foundTool = tools.find((tool) => tool.id === Number(id));
	res.send(foundTool);
};

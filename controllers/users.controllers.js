let tools = [
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
	res.status(200).send({
		success: true,
		message: "Success",
		data: foundTool,
	});
	// res.status(500).send({
	// 	success: false,
	// 	error: "Internal Server Error.",
	// });
};

module.exports.updateUser = (req, res) => {
	// const newData = req.body;
	const { id } = req.params;
	const filter = { _id: id };

	const newData = tools.find((tool) => Number(tool.id) === Number(id));

	newData.id = id;
	newData.name = req.body.name;

	res.send(newData);
};

module.exports.deleteUser = (req, res) => {
	const { id } = req.params;
	const filter = { _id: id };

	tools = tools.filter((tool) => tool.id !== Number(id));

	res.send(tools);
};

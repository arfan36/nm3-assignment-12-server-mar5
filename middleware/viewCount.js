let count = 0;

const viewCount = (req, res, next) => {
	count++;
	console.log(count);

	// res.send("users found");
	next();
};

module.exports = viewCount;

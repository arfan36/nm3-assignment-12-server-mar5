const express = require("express");
const controllers = require("../../controllers/users.controllers");

const router = express.Router();

// router.get("/:id", (req, res) => {
// 	res.send("users found with id");
// });

// router.post("/", (req, res) => {
// 	res.send("users added");
// });

router
	.route("/")
	/**
	 * @api {get} /users All Users}
	 * @apiDescription Get all users
	 * @apiPermissions admin
	 *
	 * @apiHeader {String} Authorization User's access token
	 *
	 * @apiParam {Number{1-}}			[page=1] 		List page
	 * @apiParam {Number{1-100}}		[limit=10] 		Users per page
	 *
	 * @apiSuccess {Object[]} all the users.
	 *
	 * @apiError (Unauthorized 401)	 Unauthorized 		Only authorized users can access the data
	 * @apiError (Forbidden 403 		Forbidden 			Only admin can access the data)
	 */
	.get(controllers.getAllUsers)

	/**
	 * @api {post} /save a user
	 * @apiDescription save user information
	 * @apiPermissions buyer, seller
	 *
	 * @apiHeader {String} Authorization User's access token
	 *
	 * @apiSuccess {Object} success information.
	 *
	 * @apiError (Unauthorized 401)	 Unauthorized 		Only authorized users can access the data
	 * @apiError (Forbidden 403 		Forbidden 			Only admin can access the data)
	 */
	.post(controllers.saveAUser);

module.exports = router;

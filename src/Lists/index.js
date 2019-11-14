const communityContribution = require("./CommunityContribution.js");
const user = require("./User.js");

module.exports = function createAllTheLists(keystone) {
	communityContribution(keystone);
	user(keystone);
};

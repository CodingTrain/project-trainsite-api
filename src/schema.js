const { Text, Password } = require("@keystonejs/fields");

const access = {
	userIsAdmin: ({ authentication: { item: user } }) =>
		Boolean(user && user.isAdmin),
	userIsCurrentAuth: ({ authentication: { item: user } }) => {
		if (!user) return false;
		return true;
	},
};

module.exports.User = {
	fields: {
		username: { type: Text, isRequired: true },
		password: {
			type: Password,
			isRequired: true,
			access: {
				read: access.userIsCurrentAuth,
				update: access.userIsCurrentAuth,
			},
		},
	},
	access: {
		// TODO: setup isAdmin for Users if needed later
		delete: access.userIsAdmin,
	},
};

module.exports.CommunityContribution = {
	access: {
		create: access.userIsCurrentAuth,
		read: () => true,
		update: access.userIsCurrentAuth,
		delete: access.userIsCurrentAuth,
	},
	fields: {
		name: { type: Text, isRequired: true },
		email: { type: Text },
		linkToCode: { type: Text, isRequired: true },
		linkToDemo: { type: Text },
	},
};

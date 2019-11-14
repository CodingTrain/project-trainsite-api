const { Text } = require("@keystonejs/fields");

module.exports = function communityContribution(keystone) {
	keystone.createList("CommunityContribution", {
		fields: {
			name: { type: Text, isRequired: true },
			email: { type: Text },
			linkToCode: { type: Text, isRequired: true },
			linkToDemo: {
				type: Text,
				// testing access from api
				access: {
					create: ({ authentication }) => authentication.item.isAdmin,
					read: () => true,
					update: ({ authentication }) => authentication.item.isAdmin,
					delete: () => false,
				},
			},
		},
	});
};

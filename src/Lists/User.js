const { Text, Password } = require("@keystonejs/fields");

module.exports = function User(keystone) {
	keystone.createList("User", {
		fields: {
			// Everyone can get a list of all usernames
			username: { type: Text, isRequired: true },
			password: {
				type: Password,
				isRequired: true,
				access: {
					// Only admins can see if a password is set. No-one can read their own or other user's passwords
					read: ({ authentication }) => authentication.item.isAdmin,
					// Admins can update anyone's password
					update: ({ authentication }) => authentication.item.isAdmin,
				},
			},
		},
	});
};

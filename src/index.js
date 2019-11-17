const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { User, CommunityContribution } = require("./schema.js");

const PROJECT_NAME = "codingtrain-api";

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
	name: PROJECT_NAME,
	adapter: new Adapter(),
	onConnect: async () => {
		// setup default admin user & dummy data for testing, but only if user list is empty
		const users = await keystone.lists.User.adapter.findAll();
		if (!users.length) {
			await keystone.createItems({
				User: [{ username: "admin", password: "password" }],
				CommunityContribution: [
					{
						name: "Marla Singer",
						email: "marla@singer.net",
						linkToCode: "https://github.com/CodingTrain/project-trainsite-api",
						linkToDemo: "http://localhost:3000/admin/",
					},
				],
			});
		}
	},
});

keystone.createList("User", User);
keystone.createList("CommunityContribution", CommunityContribution);

const authStrategy = keystone.createAuthStrategy({
	type: PasswordAuthStrategy,
	list: "User",
	config: {
		identityField: "username",
		secretField: "password",
	},
});

module.exports = {
	keystone,
	apps: [
		new GraphQLApp(),
		new AdminUIApp({
			enableDefaultRoute: true,
			authStrategy,
		}),
	],
};

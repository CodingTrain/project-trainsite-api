import 'reflect-metadata';
import path from 'path';
import { GraphQLServer, Options } from 'graphql-yoga';
import { buildSchema } from 'type-graphql';

const serverOptions: Options = {
  port: process.env.PORT || 4000,
};

(async () => {
  const schema = await buildSchema({
    resolvers: [path.join(__dirname, 'resolvers/**/*.{ts,js}')],
  });

  const server = new GraphQLServer({ schema });
  await server.start(serverOptions);
  console.log(`🚀 Running on port ${serverOptions.port}!`);
})();

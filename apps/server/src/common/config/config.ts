import type { ConfigType } from "./config.interface";

export default (): ConfigType => ({
  nest: {
    port: parseInt(process.env.PORT, 10) || 3100,
    environment: process.env.NEST_ENVIRONMENT,
    clientDomain: process.env.NOTIFICATION_SITE_DOMAIN,
    databaseUrl: process.env.PRISMA_DATABASE_URL,
    readOnlyDatabaseUrl: process.env.PRISMA_READ_ONLY_DATABASE_URL,
  },
  graphql: {
    playgroundEnabled: process.env.PLAYGROUND_ENABLED === "true",
    schemaDestination: process.env.SCHEMA_DESTINATION,
    sortSchema: process.env.SORT_SCHEMA === "true",
  },
});

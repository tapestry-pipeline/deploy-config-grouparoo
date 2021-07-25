exports.default = async function buildConfig() {
  return [
    {
      class: "App",
      id: "tapestry_snowflake",
      name: "Tapestry Snowflake",
      type: "snowflake",
      options: {
        account: SNOWFLAKE_ACCOUNT_HOST,
        username: SNOWFLAKE_USERNAME, // Snowflake user login name to connect with
        password: SNOWFLAKE_PASSWORD, // Password for the given username
        warehouse: "TAPESTRY", // The Snowflake warehouse to use - e.g. `warehouse: "COMPUTE_WH"`
        database: "SF_TUTS", // The Snowflake database to use
        schema: "PUBLIC", // The Snowflake schema (default: PUBLIC)
      },
    },
  ];


// {
//   "class": "App",
//   "id": "tapestry_snowflake",
//   "name": "Tapestry Snowflake",
//   "type": "snowflake",
//   "options": {
//     "schema": "TAPESTRY_SCHEMA",
//     "account": "dla27293.us-east-1",
//     "database": "TAPESTRY_DATABASE",
//     "password": "Fantastic1258$",
//     "username": "fantasticfour",
//     "warehouse": "TAPESTRY_WAREHOUSE"
//   }
// }
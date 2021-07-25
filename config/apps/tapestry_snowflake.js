exports.default = async function buildConfig() {
  // const account = JSON.parse(execSync('aws ssm get-parameter --name "/snowflake/acct-hostname" --with-decryption').toString()).Parameter.Value;
  // const username = JSON.parse(execSync('aws ssm get-parameter --name "/snowflake/acct-username" --with-decryption').toString()).Parameter.Value;
  // const password = JSON.parse(execSync('aws ssm get-parameter --name "/snowflake/acct-pass" --with-decryption').toString()).Parameter.Value;

  // dla27293.us-east-1
  const account = process.env.SNOW_HOSTNAME
  return [
    {
      class: "App",
      id: "tapestry_snowflake",
      name: "Tapestry Snowflake",
      type: "snowflake",
      options: {
        account: account,
        username: "fantasticfour", // Snowflake user login name to connect with
        password: "Fantastic1258$", // Password for the given username
        warehouse: "TAPESTRY_WAREHOUSE", // The Snowflake warehouse to use - e.g. `warehouse: "COMPUTE_WH"`
        database: "TAPESTRY_DATABASE", // The Snowflake database to use
        schema: "TAPESTRY_SCHEMA", // The Snowflake schema (default: PUBLIC)
      },
    },
  ];
}

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
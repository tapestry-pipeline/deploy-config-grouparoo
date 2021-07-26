exports.default = async function buildConfig() {
  // const account = JSON.parse(execSync('aws ssm get-parameter --name "/snowflake/acct-hostname" --with-decryption').toString()).Parameter.Value;
  // const username = JSON.parse(execSync('aws ssm get-parameter --name "/snowflake/acct-username" --with-decryption').toString()).Parameter.Value;
  // const password = JSON.parse(execSync('aws ssm get-parameter --name "/snowflake/acct-pass" --with-decryption').toString()).Parameter.Value;

  // dla27293.us-east-1
  // "fantasticfour"
  // "Fantastic1258$"
  const account = process.env.SNOW_HOSTNAME
  const username = process.env.SNOW_ACCOUNT_USERNAME
  const password = process.env.SNOW_ACCOUNT_PASSWORD
  return [
    {
      class: "App",
      id: "tapestry_snowflake",
      name: "Tapestry Snowflake",
      type: "snowflake",
      options: {
        account: account,
        username: username, // Snowflake user login name to connect with
        password: password, // Password for the given username
        warehouse: "TAPESTRY_WAREHOUSE", // The Snowflake warehouse to use - e.g. `warehouse: "COMPUTE_WH"`
        database: "TAPESTRY_DATABASE", // The Snowflake database to use
        schema: "TAPESTRY_SCHEMA", // The Snowflake schema (default: PUBLIC)
      },
    },
  ];
}

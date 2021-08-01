exports.default = async function buildConfig() {
  return [
    {
      class: "apiKey",
      id: "tapestry-api-key",
      name: "tapestry-api-key",
      options: {
        permissionAllRead: true, // Does this API Key have read permission to all topics?
        permissionAllWrite: true, // Does this API Key have write permission to all topics?
      },
    },
  ];
};

// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "giita",
      script: "npm",
      args: "run start",

      env: {
        NODE_ENV: "production",
        PORT: 3002,
      },
    },
  ],
};
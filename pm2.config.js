module.exports = {
  apps: [
    {
      name: "cors-demo-server",
      script: "./src/index.js",
      watch: true,
      increment_var: 'PORT',
      env: {
        "PORT": 3000,
        "NODE_ENV": "production"
      }
    }
  ]
}
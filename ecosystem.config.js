module.exports = {
  apps: [
    {
      script: "./index.js",
      name: "app",
      exec_mode: "cluster",
      instances: 1,
      watch:true,
      env_production:{
        NODE_ENV:"production",
      },
      env_development:{
        NODE_ENV:"development",
      },
    },
  ],
  deploy: {
    production: {
      user: "xakep",
      host: "localhost",
      ref: "origin/main",
      repo: "git@github.com:xakep8/todo-app.git",
      path: "/home/xakep/projects/todo-app",
      "post-deploy":
        "npm install && pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};
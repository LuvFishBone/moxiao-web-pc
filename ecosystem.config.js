module.exports = {
  apps : [{
    name: 'MOXIAO-WEB-PC',
    script: 'bin/www',
    cwd:"./",
    log_date_format:"YYYY-MM-DD HH:mm:ss",
    out_file:"./logs/out-0.log",
    error_file:"./logs/err-0.log",
    // exec_interpreter:"babel-node",
    instances: 1,
    // autorestart: true,
    watch: true,
    ignore_watch: 'logs',
    exec_mode:"fork",
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};

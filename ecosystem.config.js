module.exports = {
  apps : [{
    name: 'MOXIAO-WEB-PC',
    script: 'bin/www',
    cwd:"./",
    log_date_format:"YYYY-MM-DD HH:mm:ss",
    out_file:"./logs/out-0.log",
    error_file:"./logs/err-0.log",
    instances: 3,
    autorestart: true,
    watch: false,
    ignore_watch: 'logs',
    exec_mode:"cluster",
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};

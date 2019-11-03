FROM keymetrics/pm2:latest-alpine 
# 创建容器内的项目存放目录
RUN mkdir -p /home/moxiao_web_pc
WORKDIR /home/moxiao_web_pc

#  将Dockerfile当前目录下所有文件拷贝至容器内项目目录并安装项目依赖
COPY . /home/moxiao_web_pc
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install -g pm2
RUN cnpm install

# RUN ls -al -R

# 容器对外暴露的端口号，要和node项目配置的端口号一致
EXPOSE 3366

# 容器启动时执行的命令
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
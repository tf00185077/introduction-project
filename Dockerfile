FROM node:16 as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
# COPY . .
COPY . /app/
RUN npm run build
# FROM nginx:1.19
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /app/dist /usr/share/nginx/html


# 使用官方的 Nginx 映像作為基礎映像
FROM nginx:latest
# 複製本地的 nginx.conf 文件到容器中的 /etc/nginx 目錄下
COPY /nginx/nginx.conf /etc/nginx/nginx.conf

# 複製本地的靜態文件到容器中的 /usr/share/nginx/html 目錄下
COPY --from=build /app/dist /usr/share/nginx/html

# 指定容器運行時的命令
CMD ["nginx", "-g", "daemon off;"]
# Author : Vongkeo KSV

# Pull the base image 
FROM node:18.3.0-alpine3.14 as build-stage

# set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build app
# RUN npm run build && npm run generate
RUN npm run build 

# nginx state for serving content
# FROM nginx:1.21.1-alpine as production-stage

# remove the default nginx.conf
# RUN rm -rf /usr/share/nginx/html/*

# Copy nginx configuration
# COPY ./nginx/default.conf /etc/nginx/conf.d

# Copy static files from build-stage
# COPY --from=build-stage /app/.output/public /usr/share/nginx/html

# Expose port 80
EXPOSE 3000
# start nginx in the foreground
CMD ["node", ".output/server/index.mjs"]
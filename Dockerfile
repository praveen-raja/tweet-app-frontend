# 1st stage
FROM node:latest as node

RUN mkdir /usr/src/app
COPY . /usr/src/app/
WORKDIR /usr/src/app

RUN npm install && npm run build --prod

# 2nd stage
FROM nginx:alpine
COPY --from=node /usr/src/app/dist/tweet-app /usr/share/nginx/html
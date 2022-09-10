FROM node:latest

RUN mkdir /usr/src/app
COPY . /usr/src/app/
WORKDIR /usr/src/app

RUN npm install -g @angular/cli@latest && npm install

CMD ng serve --host 0.0.0.0 --port 4200
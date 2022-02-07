FROM node:14-alpine as base
RUN apk update && apk add bash
WORKDIR /app
EXPOSE 5000

COPY ./package*.json ./

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . .
CMD ["nodemon", "server.js"]
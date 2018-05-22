FROM node:10.1

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY keystone.js ./
COPY updates ./updates

ENV environment=PRODUCTION
CMD node keystone.js

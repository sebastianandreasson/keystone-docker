# keystone-docker

Run Keystone in docker, pass ENV to configure and mount your own volume of custom models.

Example docker-compose

```yml
version: '3.4'

services:
  mongodb:
    image: mongo:latest
    ports:
      - 27017:27017
  keystone:
    image: 'sebastianandreas/keystone-docker:latest'
    ports:
      - 3000:3000
    links:
      - mongodb
    volumes:
      - ./models:/usr/src/app/models
    environment:
      NAME: 'Keystone-docker'
      ADMIN_USER: user@keystone.js
      ADMIN_PASSWORD: admin
      MONGODB: 'mongodb://mongodb:27017'
      COOKIE_SECRET: 'supersecret'
```

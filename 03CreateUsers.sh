#!/bin/bash

docker cp 03.1CreateUsers.js  mongodb:/home
docker exec -t mongodb mongo -u root -p $DB_ROOT_PASSWORD /home/03.1CreateUsers.js

#!/bin/bash

. ./.env

mongo -u root -p $DB_ROOT_PASSWORD < 03.1CreateUsers.js
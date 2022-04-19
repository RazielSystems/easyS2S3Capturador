#!/bin/bash

docker cp catalogos  mongodb:/home
docker cp 04.1LoadCatalogos.sh  mongodb:/home

docker exec -t mongodb bash /home/04.1LoadCatalogos.sh

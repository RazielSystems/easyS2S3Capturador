#!/bin/bash

git clone https://github.com/PDNMX/piloto_sistema_catalogos.git

docker cp piloto_sistema_catalogos  mongodb:/home
# docker cp 04.1LoadCatalogos.sh  mongodb:/home

docker exec -t mongodb bash /home/04.1LoadCatalogos.sh

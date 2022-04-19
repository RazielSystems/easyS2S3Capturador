#!/bin/bash

cd /home/catalogos/

for file in $(ls *.json);
do
    echo $file;
    mongoimport -d administracionUsuarios -c catalogos --jsonArray -u admonP2 -p raziel --type json --file $file
done
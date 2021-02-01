#!/bin/bash

cmd="$@"

until mysqladmin ping -h mariadb -u root --password=root; do
  >&2 echo "Mariadb is unavailable - sleeping"
  sleep 10
done

>&2 echo "Mariadb is up - execute $cmd"
exec $cmd

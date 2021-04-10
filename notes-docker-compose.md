# Docker Compose

## Rebuild docker image

```bash
docker-compose down 
docker-compose up --build --force-recreate
```
* --build           = build image again
* --force-create    = create container again

## Start stop without rebuild

```bash
docker-compose start
docker-compose stop
```

#Docker

## Build docker image

```bash
docker image build --tag <tag_name> --file <dockerfile> <root location>
 or 
docker image build -t <tag name> -f <location of dockerfile> <root location>

Eg.
docker image build --tag tmjee/be-sample --file ./be-sample/docker/dockerfile ./be-sample
```

## Run docker image as container

```bash
docker container run --name <container_name> <options> -p <outside_port:inside_port> --network host <image_tag> "<optional overriding CMD>"
  or
docker container run --name <name of container> -ti <tag of image>
```

options

* -d   - detach mode
* -t   - allocate TTY
* -i   - keep STDIN open even if not attached
* -p <outside_port:inside_port>   - port mapping
* --network <network_name>        - networking

## List docker images

```bash
docker image ls
```

## List docker containers

```bash
docker container ls 
```

## Remove docker container

```bash
docker container rm <container_name>
```

## Remove docker image

```bash
docker image rm <image_name>

# eg. docker image rm <image_name>:<version>
```

## Attach into docker container

```bash
docker exec -ti <container_name> <command>

# Eg.  docker exec -ti <container_name> /bin/bash
```

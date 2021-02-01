# Docker Compose

#### Rebuild docker image
```
docker-compose down 
docker-compose up --build --force-create
```

#### Start stop without rebuild
```
docker-compose start
docker-compose stop
```


# Docker
#### Build docker image
```
docker image build --tag <tag_name> --file <dockerfile> .
```

#### Run docker image as container
```
docker container run --name <container_name> <options> -p <outside_port:inside_port> --network host <image_tag> "<optional overriding CMD>"
```
options 
*  -d   - detach mode
*  -t   - allocate TTY
*  -i   - keep STDIN open even if not attached
*  -p <outside_port:inside_port>   - port mapping
*  --network <network_name>        - networking

#### List docker images
```
docker image ls
```

#### List docker containers
```
docker container ls 
```

#### Remove docker container
```
docker container rm <container_name>
```

#### Remove docker image
```
docker image rm <image_name>

# eg. docker image rm <image_name>:<version>
```

#### Attach into docker container
```
docker exec -ti <container_name> <command>

# Eg.  docker exec -ti <container_name> /bin/bash
```

# Docker Compose Playground 
 
Just a playground to try things out with docker-compose


## Diagram

```
    Browser ----------------------------+
      | (web)                           | (REST)
      | http://localhost:4201/...       | http://localhost:8889/...
      v                                 |
  +---+-------------------------+       |
  |  docker-compose             |       |
  |                             |       |
  |  +-----------------------+  |       |
  |  | docker:               |  |       |
  |  | frontend              |  |       |
  |  |  - local port: 80     |  |       |
  |  |  - public port: 4201  |  |       |
  |  +-----+-----------^-----+  |       |
  |        |           |        |       |
  |   backend:8888     |        |       |
  |        |       frontend:80  |       |
  |        |           |        |       |
  |  +-----v-----------+-----+  |       |
  |  | docker:               |  |       |
  |  | backend               |  |<------+
  |  |   - local port: 8888  |  |
  |  |   - public port: 8889 |  |
  |  +-----+-----------------+  |
  |        |                    |
  |     mariadb:3306            |
  |        |                    |
  |  +-----v-----------------+  |
  |  | docker:               |  |
  |  | mariadb               |  |
  |  |  - local port: 3306   |  |
  |  |  - public port: 3307  |  |
  |  +-----------------------+  |
  +-----------------------------+
```


# Docker Playground

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/inPhoenix/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

    # Learning Docker


### Basic commands
```shell
#Listing commands
docker ps # Only running containers
docker ps -a # show previous containers

# Stop and deleting
docker stop <ID>
docker start <ID>
docker stop -t=0 <ID> # stop right away
docker rm <ID>
docker rm <ID> --force
docker stop $(docker container ls -q) -t=0 # quiet - get only id
## delete images
docker rmi -f $(docker images -aq)

# Running 
docker run ubuntu sleep 1d #keep it running
docker exec -it <ID> bash
docker run -it ubuntu bash
docker run -d <image> #d for detached

# Port mapping
docker run -P <image> # will do the port map for you
docker run -p 8080:80 # 8080 is the local and 80 is the one that container maps
docker port <ID> # list the port mapping
```

### Docker Build

```shell
docker build -t <user>/app-node:1.0 . # user is lowercase

docker build -t inphoenix/app-node:1.1 . # 1.1 is a new version
docker run -d inphoenix/app-node:1.1 # run     


docker images
docker run -p 8080:5000 -d <IMAGE ID>

```

### Creating a build in hub.docker

```shell
docker login -u user
docker images
docker push inphoenix/app-node:1.0
docker push inphoenix/app-node:1.1 # If you generate a new version
```

### Mapping Volumes 
```shell
# this command will create an folder named app on the container which will reflect on your local
docker run –it –v /Users/phoenix/volume-docker:/app Ubuntu bash.

# Another way is to create volumes
docker run –it --mount type=bind,source=/Users/phoenix/volume-docker,target=/app ubuntu bash.
#another example
docker run –mount type=bind,source=/home/diretorio,target=/app nginx
```


### Docker compose

#### Basic config:

```shell
version: '3' - version of the docker-compose
services:
  redis-server:
    image: 'redis'
	node-app:
	  build: . // use the dockerfile to build the image
	  ports:
	    - "4001:8081" // tip: - in yaml is an array

```

#### rebuild
```
docker-compose up --build
```

#### start/stop

```
docker-compose up -d
docker-compose down
```

command to get inside the alpine

```shell
docker exec -it <ID> /bin/sh

```

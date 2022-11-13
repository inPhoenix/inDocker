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

# Docker Build

```shell
docker build -t <user>/app-node:1.0 . # user is lowercase

docker build -t inphoenix/app-node:1.1 . # 1.1 is a new version
docker run -d inphoenix/app-node:1.1 # run     


docker images
docker run -p 8080:5000 -d <IMAGE ID>

```

# Creating a build in hub.docker
```shell
docker login -u user
```

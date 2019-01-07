rm -rf node_modules yarn.lock
docker-compose stop
docker-compose rm
docker container stop `docker container ls -aq`
docker container rm `docker container ls -aq`
docker image rm --force `docker images -q`

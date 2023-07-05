# INFORMATION:

## ENVIROMENTS:
### Create file ".env" with environment variables:

- MYSQLDB_HOST= NAMEHOST
- MYSQLDB_ROOT_PASSWORD= PASSWORDROOT
- MYSQLDB_DATEBASE= NAMEDATABASE

- MYSQLDB_LOCAL_PORT= PORTOUT
- MYSQLDB_DOCKER_PORT= PORTIN (3306)

- NODE_LOCAL_PORT= PORTOUT InN BROWSER
- NODE_DOCKER_PORT= PORTIN DOCKERCONTEINER

## RUN:
### PRODUCTION:

- docker compose up

### DEV:
- docker compose -f docker-compose-dev.yml up

## STOP:

- docker compose down

## BUILD CHANGES:
### PRODUCTION:

- docker compose up --build

### DEV:

- docker compose -f docker-compose-dev.yml up --build

## OTHERS COMMANDS:

- docker -t NAME-CONTAINER .
- docker -it NAME-CONTAINER .
- docker images -a
- docker rmi IMAGE-ID
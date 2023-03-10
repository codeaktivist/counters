# Counters - Different counters, different storages

A simple counter app utilizing different storage types to keep track of the current count.

## Content

Following counters are included:
- Frontend
- Backend
- Redis (planned)
- MongoDB (planned)

## Scope

This app will be uses to setup differed CI/CD scenarios.

## Networking configuration

### Running local
#### Development Mode
- Frontend via npm start (development): localhost:3001
- Backend via npm run dev (development): localhost:3000
- api requests from frontend to backend proxy to localhost:3000
#### Production Mode (local)
- Frontend build via npm run build (production)
- Frontend served thru backend (express.static)
- Backend via npm run prod: localhost:5000

### Running remote via CI/CD pipeline
- set NODE_ENV to 'production' via pipeline variable
- set PORT_PROD to '5000' or whatever via pipeline variable
- use 'pm2 startOrReload' to run app

### Agent configuration
- VM made available to pipeline via azure-pipelines-agent (https://github.com/microsoft/azure-pipelines-agent/releases)
- pm2 configured for auto restart after boot (see 'pm2 startup')

### CI/CD Setups
#### Individual pipelines
- build-pipeline.yml -> install, build, lint, test, zip artifacts (drop)
- release-pipeline.yml -> download artifacts, run app

#### Release pipeline / Azure
- todo

## Environment variables
To be set in dotenv-file ./counters-backend/.env

Production environment
PORT_PROD=...
REDIS_URL_PROD=...
MONGO_URL_PROD=...

Development environment
PORT_DEV=...
REDIS_URL_DEV=...
MONGO_URL_DEV=...
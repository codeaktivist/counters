FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node counters-backend/package*.json .

RUN npm ci

COPY --chown=node:node counters-backend/ .

ENV PORT_DEV=3000, PORT_PROD=5000

USER node

CMD [ "npm", "run", "prod" ]
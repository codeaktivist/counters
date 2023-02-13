FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node counters-backend/package*.json .

RUN npm ci

COPY --chown=node:node counters-backend/ .

COPY --chown=node:node counters-frontend/ frontend-temp

RUN cd frontend-temp && npm ci && npm run build mv build ../build && cd .. && rm -rf frontend-temp

ENV PORT_PROD=8080

USER node

CMD [ "npm", "run", "prod" ]
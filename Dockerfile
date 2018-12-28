FROM node:10-alpine

COPY . /app/

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN yarn

RUN npm run build

CMD ["npm", "run", "server:dev"]

EXPOSE 3010
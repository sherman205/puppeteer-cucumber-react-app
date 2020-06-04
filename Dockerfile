FROM node:carbon

ENV APPLICATION_BASE /app

RUN mkdir -p $APPLICATION_BASE

WORKDIR $APPLICATION_BASE

COPY package*.json ./
RUN npm install

COPY public ./public
COPY src ./src

RUN npm run build

EXPOSE 3000

#CMD ["node", "server.js"]
CMD ["npm", "start"]
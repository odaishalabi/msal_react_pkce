FROM node

WORKDIR /usr/msal_spa

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD [ "npm", "start" ]
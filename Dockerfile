FROM node:16

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules:$PATH

#RUN

ADD ./package.json /usr/src/app
RUN npm install --silent

#CMD ["npm", "start"]
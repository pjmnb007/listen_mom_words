FROM node:4.2.2
RUN mkdir -p /usr/src/platform
WORKDIR /usr/src/platform
COPY package.json /usr/src/platform/
COPY . /usr/src/platform
EXPOSE 3000
ENTRYPOINT npm start
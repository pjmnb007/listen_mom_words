FROM node:4.2.2
RUN mkdir -p /usr/src/platform
WORKDIR /usr/src/platform
COPY package.json /usr/src/platform/
RUN npm install
COPY . /usr/src/platform
EXPOSE 80
ENTRYPOINT npm start
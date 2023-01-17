# pull the official base image
FROM node: alpine
# set working direction
WORKDIR /idta-web
# add `/idta-web/node_modules/.bin` to $PATH
ENV PATH /idta-web/node_modules/.bin:$PATH
# install idta-weblication dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add idta-web
COPY . ./
# start idta-web
CMD ["npm", "start"]
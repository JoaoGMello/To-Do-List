# build stage
FROM node:lts-alpine as build-stage

RUN apk update

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm install --omit=dev


# production stage
FROM nginx:stable-alpine as production-stage

RUN apk update && apk add dumb-init  \
  curl bash binutils gettext git \
  && apk --no-cache add python3 make g++

COPY deploy/hmlg/nginx/etc/nginx.conf  /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["dumb-init", "nginx", "-g", "daemon off;"]
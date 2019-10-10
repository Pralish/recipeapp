# FROM node:11-alpine as builder
# RUN  echo "https://mirror.csclub.uwaterloo.ca/alpine/v3.9/main" >/etc/apk/repositories
# RUN  echo "https://mirror.csclub.uwaterloo.ca/alpine/v3.9/community" >>/etc/apk/repositories
# ARG ENVIRONMENT
# RUN apk update && \
#     apk add git yarn

# WORKDIR /opt

# COPY ./ /opt
# RUN yarn build

# FROM nginx:alpine
# COPY --from=builder /optp/build/ /usr/share/nginx/html

# RUN sed -i '11i try_files $uri $uri/ /index.html;' /etc/nginx/conf.d/default.conf

FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build


FROM nginx:1.15

COPY --from=build-stage /app/build /usr/share/nginx/html/

COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf


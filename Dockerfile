
FROM nginx:latest

COPY build/ /nginx/

COPY ./nginx/nginx.config /etc/nginx/conf.d/default.conf
COPY ./nginx /usr/share/nginx/html


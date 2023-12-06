FROM nginx:stable-alpine3.17-slim

COPY ./dist/angular2023/ ./usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

#docker build --pull --rm -f "dockerfile" -t angular_production:v1.0 "."
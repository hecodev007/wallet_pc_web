FROM node:22-alpine as builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build


FROM nginx:alpine as runner
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]

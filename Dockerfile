FROM node:22-alpine as builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build


FROM nginx:alpine as runner
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

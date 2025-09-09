# syntax=docker/dockerfile:1
FROM node:20-alpine AS build
WORKDIR /app
COPY frontend/package.json frontend/pnpm-lock.yaml* ./
RUN corepack enable && pnpm i --frozen-lockfile
COPY frontend/ .
RUN pnpm build

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY infra/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
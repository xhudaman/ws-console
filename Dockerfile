FROM node:lts-alpine

ARG USER_ID
ARG GROUP_ID

RUN npm i -g pnpm

USER node
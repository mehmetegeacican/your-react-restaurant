FROM node:14-alpine AS development
ENV NODE_ENV development

WORKDIR /your-react-restaurant
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm i
CMD ["npm", "run", "start"]

FROM node:18

WORKDIR /myapp
COPY package*.json .
RUN npm ci

COPY . .
CMD cd views-react && npm install && npm run build && cd .. && npm start
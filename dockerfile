FROM node:18

WORKDIR /myapp
COPY package.json .
RUN npm install

COPY . .
CMD cd views-react && npm install && npm run build && cd .. && npm start
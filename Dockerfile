FROM node

WORKDIR /usr/app

COPY package.json .
COPY tsconfig.json .

RUN npm install
RUN npm install -g ts-node typescript

ENV PATH="/usr/app/node_modules/.bin:${PATH}"

COPY . . 

RUN npm run build

CMD ["npm", "run", "build"]

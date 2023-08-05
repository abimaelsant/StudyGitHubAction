FROM node:18

WORKDIR /app

copy . /app/

RUN npm install

EXPOSE 3006

CMD ["node", "src/index"]
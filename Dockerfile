FROM node:slim
WORKDIR /user/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node" , "eman.js"]
FROM node

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
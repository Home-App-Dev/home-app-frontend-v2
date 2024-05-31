FROM node:18.16.0
WORKDIR /home-app-frontend-v2-main
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000

# ENTRYPOINT [ "npm", "run" ]
# CMD [ "start" ]
# Multi stage Docker container

# Step 1: Build the app for production, i.e. install tools and dependecies that required for the app
FROM node:16 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Craete a Runtime environment for the app, i.e. run the app, here we copy only the files that required to run the app, to run the app we dont need tools and dependecies, just we need static files from the build
# alpine is a light environment in linux os, which is used to create images for lightweight environment, fast, secure

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/build ./build
RUN npm install -g serve
CMD ["serve", "-s", "build"]
EXPOSE 3000



FROM node:14
WORKDIR /app/node

# Port mapping for reference (docker ps)
# Build var: Create var during image building
ARG PORT_BUILD=5000
# Container var: Create var that will be used in the container
ENV PORT=$PORT_BUILD
# To show in docker ps
EXPOSE $PORT_BUILD

# Creating image / executing
COPY . .
RUN npm install
ENTRYPOINT npm start


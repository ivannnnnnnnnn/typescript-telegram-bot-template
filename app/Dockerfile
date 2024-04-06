FROM alpine:3.19 as base


# Set working directory
WORKDIR /app

RUN apk add --no-cache \
    nodejs \
    npm \
    bash \
    make

# Confirm Node.js and npm installation
RUN node -v
RUN npm -v


# Copy source code
COPY . .

# Install dependencies
RUN npm i

FROM base as dev

# Install nodemon
RUN npm install -g nodemon

#CMD ["nodemon", "--exec", "ts-node", "./src/index.ts"]
CMD ["npm", "run", "dev"]

# Use a specific version of Node.js
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose the port Vite uses (usually 5173)
EXPOSE 5173

# Start the Vite development server
CMD [ "npm", "run", "dev" ]

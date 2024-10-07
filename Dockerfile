FROM node:20.9.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY studyPlatform/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY studyPlatform/ ./

# Expose the ports the app runs on
EXPOSE 5173
EXPOSE 3000

# Define the command to run the app
CMD ["npx", "concurrently", "\"node app.js\"", "\"npm run dev\""]
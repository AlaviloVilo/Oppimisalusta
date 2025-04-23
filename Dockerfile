FROM node:20.9.0

# 1. Make /app your HOME so npm puts .npm here
ENV HOME=/app
WORKDIR /app

# 2. Redirect npm’s cache to a writable location
ENV NPM_CONFIG_CACHE=/app/.npm

# 3. Copy only your package manifests and install
COPY studyPlatform/package*.json ./
RUN mkdir -p $HOME/.npm \
    && npm install --unsafe-perm

# 4. Copy the rest of your code
COPY studyPlatform/ ./

# 5. Expose your ports
EXPOSE 5173 3000

# 6. Launch both servers
CMD ["npx", "concurrently", "node app.js", "npm run dev"]

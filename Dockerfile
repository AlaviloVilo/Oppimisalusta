FROM node:20.9.0

# 1. Make /app your HOME so npm puts .npm here
ENV HOME=/app
WORKDIR /app

# 2. Redirect npm’s cache to a writable location
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm

# 3. Ensure /app is group-writable (OpenShift runs your process as gid=0)
RUN chgrp -R 0 /app \
    && chmod -R g+rwX /app

# 4. Copy only your package manifests and install deps
COPY studyPlatform/package*.json ./
RUN npm install --unsafe-perm
RUN npm install react-player --unsafe-perm


# 5. Copy the rest of your code
COPY studyPlatform/ ./

# 6. Re-apply permissions in case COPY reset them
RUN chgrp -R 0 /app \
    && chmod -R g+rwX /app

# 7. Expose your ports
EXPOSE 5173 3000

# 8. Launch both servers
CMD ["npx", "concurrently", "node app.js", "npm run dev"]


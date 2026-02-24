# Force x64 architecture so node-sass works
FROM --platform=linux/amd64 node:14-bullseye

# Set working directory
WORKDIR /app

# Copy dependency manifests first (better Docker caching)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the site code
COPY . .

# Gatsby dev server port
EXPOSE 8000

# Run Gatsby dev server
CMD ["npx", "gatsby", "develop", "-H", "0.0.0.0", "-p", "8000"]



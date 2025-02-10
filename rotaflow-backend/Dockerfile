# ---- build stage ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
# no build step needed for plain Express

# ---- runtime stage ----
FROM node:20-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app

# non-root user
RUN addgroup -S nodegrp && adduser -S nodeusr -G nodegrp

# copy only what’s needed at runtime
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src

ARG PORT=3000
ENV PORT=${PORT}
EXPOSE ${PORT}

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- "http://localhost:${PORT}/health" || exit 1

USER nodeusr
CMD ["node", "src/server.js"]


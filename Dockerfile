FROM node:20-alpine as builder

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM node:20-alpine as runner

WORKDIR /app

COPY --from=builder /app/dist/some-store-client/browser /app/

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-p", "3000", "-s", "."]
FROM docker.io/binxio/ssm-get-parameter:0.2.3 AS ssm

FROM alpine
COPY --from=ssm /ssm-get-parameter  /usr/local/bin
ENTRYPOINT [ "/usr/local/bin/entrypoint" ]

FROM node:14

WORKDIR /grouparoo

ENV NODE_ENV='production'
ENV PORT=3000
ENV WEB_URL=http://localhost:$PORT
ENV WEB_SERVER=true
ENV SERVER_TOKEN="default-server-token"
ENV WORKERS=1
ENV REDIS_URL="redis://localhost:6379/0"
ENV DATABASE_URL="postgresql://localhost:5432/grouparoo_development"
ENV S3_ACCESS_KEY=""
ENV S3_SECRET_ACCESS_KEY=""
ENV S3_REGION=""
ENV S3_BUCKET=""
ENV SNOWFLAKE_ACCOUNT_HOST=ssm:///snowflake/acct-hostname
ENV SNOWFLAKE_USERNAME=ssm:///snowflake/acct-username
ENV SNOWFLAKE_PASSWORD=ssm:///snowflake/acct-pass

# snowflake account host /snowflake/acct-hostname
# snowflake username /snowflake/acct-username
# snowflake password /snowflake/acct-pass


COPY . .
RUN npm install
RUN npm prune

WORKDIR /grouparoo/node_modules/@grouparoo/core
CMD ["./bin/start"]

EXPOSE $PORT/tcp
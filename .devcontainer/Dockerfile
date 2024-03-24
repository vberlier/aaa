FROM node:21-bookworm

USER node

ARG PB_VERSION="0.22.6"
RUN mkdir -p ~/.local/bin \
    && curl -fsSL https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip -o /tmp/pocketbase.zip \
    && unzip /tmp/pocketbase.zip pocketbase -d ~/.local/bin \
    && rm /tmp/pocketbase.zip

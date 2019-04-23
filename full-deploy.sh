#!/bin/sh
# Full deployment for the client and services
APP_NAME="TODO"
# GIT_HASH=$(git rev-parse --short HEAD)

# Deploy client resources to S3
cd ./client
./deploy.sh "${APP_NAME}"
cd ../

# Deploy Lambda handler
cd ./service
npm install
./node_modules/.bin/sls create_domain --app-name "${APP_NAME}"
./node_modules/.bin/sls deploy --app-name "${APP_NAME}" # --hash "${GIT_HASH}"
cd ../

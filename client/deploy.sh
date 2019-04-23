#!/bin/sh
# Usage: ./deploy.sh APP_NAME
APP_NAME=$1

aws cloudformation deploy \
    --stack-name "${APP_NAME}" \
    --template-file ./ci/s3.yml \
    --parameter-overrides AppName="${APP_NAME}" \
    --no-fail-on-empty-changeset

BUCKET_NAME=$(aws cloudformation describe-stacks --stack-name "${APP_NAME}" | jq -r '.Stacks[0] | .Outputs[] | select(.OutputKey == "BucketName") | .OutputValue')

npm install && npm run build
aws s3 sync ./dist s3://${BUCKET_NAME}

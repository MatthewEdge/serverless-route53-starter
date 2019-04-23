# Serverless With Route53 + S3 Web Client

S3-hosted web client + a standard Serverless Lambda (typescript in this example) with a friendly Route53 domain name.

1) Register a domain with Route53
2) Request an ACM certificate for HTTPS traffic
3) Populate the domain name and certificate name in `serverless.yml`
4) Run `serverless create_domain` (could take a hot minute to start resolving DNS queries)

## Structure

Web client exists in the `client` directory.
Services and Serverless deployment steps exists in the `service` directory.

## Deployment

Run `full-deploy.sh`:
    - Make sure to change the `APP_NAME` parameter to the desired application name. Letters, numbers, underscores, and hyphens only.

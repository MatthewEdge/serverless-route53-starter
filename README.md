# Serverless With Route53

Standard Serverless Lambda (typescript in this example) with a friendly Route53 domain name

1) Register a domain with Route53
2) Request an ACM certificate for HTTPS traffic
3) Populate the domain name and certificate name in `serverless.yml`
4) Run `serverless create_domain` (could take a hot minute to start resolving DNS queries)
5) Run `sls deploy`

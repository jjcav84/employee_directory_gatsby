// File to build app into Docker container
// TODO push this to my public Docker Hub account
FROM node:10

WORKDIR /usr/src/app
COPY . .
RUN yarn && cd www && yarn && yarn run build

# Set cwd to www so that Gatsby's bootstrap can find www/gatsby-node.js
WORKDIR /usr/src/app/www
CMD [ "node","../scripts/www-data-explorer.js" ]

# To run this image, set the port as an env var with `-e PORT=xxxx` e.g.
# docker run -p 8080:8080 --rm -it -e PORT=8080 <registryUsername>/<imageName>
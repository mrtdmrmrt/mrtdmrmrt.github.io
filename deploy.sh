#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add dist -f
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git subtree push --prefix dist origin gh-pages


cd -
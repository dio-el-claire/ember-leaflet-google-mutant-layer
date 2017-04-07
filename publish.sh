#!/bin/bash
ROOT_URL="/ember-leaflet-google-mutant-layer/" LOCATION_TYPE="hash" ember build
rm -rf gh-pages/*
mkdir -p gh-pages
cp -R dist/* gh-pages/
cd gh-pages


git init
git remote add uptream git@github.com:dio-el-claire/ember-leaflet-google-mutant-layer.git
git fetch uptream
git checkout --orphan gh-pages
git add .
git commit -am "Site"
git push -f uptream gh-pages
cd ..
rm -rf gh-pages
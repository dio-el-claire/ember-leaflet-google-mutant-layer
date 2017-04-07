#!/bin/bash
BASE_URL="ember-leaflet-google-mutant-layer" LOCATION_TYPE="hash" ember build
rm -rf gh-pages/*
cp -R dist/* gh-pages/
cd gh-pages
git init
git remote add docs git@github.com:wheely/ember-dialog.git
git fetch docs
git checkout --orphan gh-pages
git add .
git commit -am "Site"
git push -f docs gh-pages
git branch -u docs/gh-pages
cd ..
rm -rf gh-pages
#!/bin/bash

rm -rf dist/
rm dist.tar*
yarn build
tar -zcvf dist.tar.gz dist

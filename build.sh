#!/bin/bash
set -e
asciidoctor book.adoc
rm -rf docs
mkdir docs
cp book.html docs/index.html
cp -rp images docs/images
cp -rp css docs/css
cp -rp js docs/js
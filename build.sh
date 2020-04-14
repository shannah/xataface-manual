#!/bin/bash
set -e
asciidoctor book.adoc
rm -rf docroot
mkdir docroot
cp book.html docroot/index.html
cp -rp images docroot/images
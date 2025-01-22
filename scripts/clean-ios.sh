#!/bin/bash

echo "⏳ Cleaning iOS level... \n"

rm -rf ios/build ios/Pods
cd ./ios
rm Podfile.lock
bundle exec pod deintegrate
bundle exec pod repo update
bundle exec pod setup
cd ..

echo "🧹 Cleaned up successfully!"
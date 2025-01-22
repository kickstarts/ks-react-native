#!/bin/bash

echo "⏳ Cleaning Android level..."

cd ./android
./gradlew clean
rm -rf build app/build
cd ..

echo "⏳ Cleaning RN level..."

rm -rf node_modules
rm -rf yarn.lock

echo "⏳ Cleaning iOS level..."

rm -rf ios/build ios/Pods
cd ./ios
rm Podfile.lock
bundle exec pod deintegrate
bundle exec pod repo update
bundle exec pod setup
cd ..

echo "🧹 Cleaned up successfully!"
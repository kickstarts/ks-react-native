#!/bin/bash

echo "⏳ Cleaning Android level... \n"

cd ./android
./gradlew clean
rm -rf build app/build
cd ..

echo "🧹 Cleaned up successfully!"
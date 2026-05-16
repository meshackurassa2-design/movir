#!/bin/bash
set -e

mkdir -p assets

# Decode icon
echo "Decoding icon..."
base64 -d icon_base64.txt > assets/icon.png

# Decode splash
echo "Decoding splash..."
base64 -d splash_base64.txt > assets/splash.png

# Install asset generator
npm install @capacitor/assets

# Generate native assets
npx capacitor-assets generate --ios

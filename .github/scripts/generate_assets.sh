#!/bin/bash
set -e

mkdir -p assets

# Decode icon
echo "Decoding icon..."
base64 -D -i icon_base64.txt -o assets/icon.png

# Decode splash
echo "Decoding splash..."
base64 -D -i splash_base64.txt -o assets/splash.png


# Install asset generator
npm install @capacitor/assets

# Generate native assets
npx capacitor-assets generate --ios

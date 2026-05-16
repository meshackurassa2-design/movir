import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dapazcm.moviebox',
  appName: 'MOVIEBOX',
  webDir: 'out',
  server: {
    url: 'https://moviebox.ph/',
    cleartext: true
  },
  ios: {
    contentInset: 'always'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 5000,
      launchAutoHide: true,
      backgroundColor: "#052b36",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#fbbf24",
      splashFullScreen: true,
      splashImmersive: true
    }
  }
};

export default config;


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      // Exclude React Native libraries
      "react-native": "react-native-web"
    }
  },
  optimizeDeps: {
    exclude: [
      'react-native', 
      'expo-font', 
      '@expo/vector-icons'
    ]
  },
  esbuild: {
    loader: "tsx", // ✅ Enable JSX parsing for .js files
    include: /node_modules\/.*\.js$/, // ✅ Apply fix for JSX parsing in node_modules
  },
});

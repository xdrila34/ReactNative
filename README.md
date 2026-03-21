npx create-expo-app mobileApp --template
---------------------------
npx expo install react-native-web react-dom @expo/metro-runtime
npm install @expo/ngrok
npm install @react-navigation/native @react-navigation/stack
npx expo install react-native-screens react-native-safe-area-context
npx expo start --tunnel
npm install expo@^54.0.0
npx expo install --fix
npx expo-doctor
# if duplicated dependencies
npm why react-native
npm dedupe
npx expo-doctor
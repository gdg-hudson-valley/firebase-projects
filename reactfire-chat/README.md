#ReactFire Chat

Replicating the [Firebase Web Codelab](https://codelabs.developers.google.com/codelabs/firebase-web/index.html?index=..%2F..%2Findex#1), but using React and Material-UI for creating the related application.

## 1. Overview

Things that this codelab will cover

 * Creating a React App scaffold using create-react-app
 * Setting up a Firebase backend for hosting + database
 * Integrating Firebase support into front-end using firebase CLI
 * Integrating Material-UI to support creation of React-enabled widgets
 * Deploying the React app to Firebase hosting
 * Syncing data using Firebase Realtime DB
 * Syncing data using Firebase Storage
 * Authenticating users using Firebase Auth

What you will need

 * Desktop environment (I use MacOS) for development
 * IDE or Text editor (I use Sublime)
 * Terminal or console (I use MacOS default terminal)
 * Browser (I use Chrome)
 * NodeJS installed 

What you need to pre-install using Node

 * create-react-app ```npm install -g create-react-app```
 * Firebase CLI ```npm install -g firebase-tools```


## 2. Setup Starter App

### 2.a Scaffold React app (front-end)

 * Scaffold React app (~5 mins) ```create-react-app reactfire-chat-app```
 * Refactor app (into src/components and src/pages subdirs)
 * Run & check app works ```cd reactfire-chat-app; npm start```

Create-React-App uses webpack to bundle and optimize application for deployment. Webpack by default will look for an index.js file as the default entry/starting point. _In this case, the file is src/index.js_

### 2.b Setup Firebase project (back-end)
 
  * Open browser to ```http://console.firebase.google.com```
  * Login with a valid Google account
  * Create new project e.g., ```reactfire-chat-app```
  * View project console e.g., ```https://console.firebase.google.com/project/reactfire-chat-app/overview```
  * Enable Google Auth (I enabled Google, Email/Password and Anonymous)
  
### 2.c Add Firebase dependency to React app (front-end)

 * Add Firebase dependency to project ```npm install firebase --save```
 * Go to Firebase console, click _Add Firebase to your web app_
 * Copy contents under "// Initialize Firebase" into clipboard
 * Verify that _storageBucket_ property is not empty!
 * Open _src/index.js_, add ```import * as firebase from 'firebase'``` at top
 * Then copy contents of clipboard into _src/index.js_ under this import.
 * Run and validate updated app ```npm start```
 * Build production version ```npm run build``` => creates build/
 
### 2.d Install Firebase CLI, configure React app to use Firebase project

 * Verify firebase version ```firebase version``` (3.x.x required)
 * Login to firebase console (with gmail account) ```firebase login``` 
 * Initialize firebase config (db + hosting) ```firebase init```
 * Select appropriate backend project when asked (reactfire-chat-app)
 * Choose _build_ instead of _public_ for the "public directory"
 * Complete process (creates _firebase.json, .firebaserc, database.rules.json_)
 * Deploy the app to Firebase hosting ```firebase deploy ```
 * Open hosting URL and verify ```https://reactfire-chat-app.firebaseapp.com```

### 2.e Using Project Aliases for phased deployments
 
  * Add a new project alias (e.g., for staging) ```firebase use --add```
      - Select Firebase project to deploy to
      - Provide friendly name for alias (for this deployment destination)
  * Simply use correct alias to deploy _same_ codebase to different projects

## 3. Migrate FriendlyChat code

For quick exploration, we simply migrate existing HTML and JS code directly into our React components.. some minor modifications were made for efficiency and for compliance with React JSX (vs. HTML) requirements.

At this point, we should be in sync with [Step 6](https://codelabs.developers.google.com/codelabs/firebase-web/index.html?index=..%2F..%2Findex#5) of the Friendly Chat App codelab.

## 4. (Codelab) User Sign-In

 * [View Codelab Directions](https://codelabs.developers.google.com/codelabs/firebase-web/index.html?index=..%2F..%2Findex#6). All these changes will be made in the _FirebaseHelper.js_ file
 * Create shortcuts to firebase features (auth, database, storage)
 * Register handler to process auth state changes (onAuthStateChanged)
 * (Complete STEP-1, STEP-2, STEP-3, STEP-4, STEP-5)

 


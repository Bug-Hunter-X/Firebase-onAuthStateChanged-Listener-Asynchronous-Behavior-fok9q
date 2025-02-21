# Firebase onAuthStateChanged Asynchronous Issue

This repository demonstrates a common asynchronous issue with Firebase's `onAuthStateChanged` listener.  The listener does not always update synchronously after authentication events (sign-in, sign-out). This can lead to race conditions and incorrect UI state if your app relies on immediate updates.

## Problem
The provided `bug.js` file shows how the listener may not reflect the latest authentication state immediately.  This might cause a brief period where the UI shows incorrect information before the listener catches up.

## Solution
The `bugSolution.js` file presents a solution using promises to ensure the authentication state is correctly handled before updating the UI.

## Setup
1.  Clone this repository.
2.  Install Firebase:
    ```bash
    npm install firebase
    ```
3.  Configure your Firebase project (add your config to `firebase.js`)
4.  Run the code.
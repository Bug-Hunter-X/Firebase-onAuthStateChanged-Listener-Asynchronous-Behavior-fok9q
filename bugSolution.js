function waitForAuthState(setState) {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      setState(user);
      resolve();
    });
  });
}

async function signInAndCheckState() {
  await firebase.auth().signInWithEmailAndPassword('user@example.com', 'password');
  await waitForAuthState(setUser);
}

function setUser(user){
    if(user) {
       //update ui
    } else{
       //update ui
    }
}

// ... rest of the code
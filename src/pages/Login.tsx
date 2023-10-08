import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
} from "@ionic/react";

import {
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function logIn() {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    window.localStorage.setItem("text", "");
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          type="email"
          placeholder="Email"
          value={email}
          onIonChange={(e) => setEmail(e.detail.value!)}
        />
        <IonInput
          type="password"
          placeholder="Senha"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
        />
        <IonButton expand="full" onClick={logIn}>
          Login
        </IonButton>
        <IonButton expand="full" onClick={googleSignIn}>
          Login Com Google
        </IonButton>
        <IonButton expand="full" routerLink="/cadastro">
          Cadastre-se
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;

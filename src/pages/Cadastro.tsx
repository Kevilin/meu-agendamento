import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";

const Cadastro: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUp() {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cadastro</IonTitle>
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
        <IonButton expand="full" onClick={signUp}>
          Cadastrar
        </IonButton>
        <IonButton expand="full" routerLink="/login">
          Já tenho cadastro
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Cadastro;

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";
import { useHistory } from "react-router-dom";

const Cadastro: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUp() {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      alert("Cadastro criado com sucesso. Redirecionando!");
      history.push("/");
    } catch (error) {
      alert(`Erro ao efetuar o Cadastro. Motivo: ${error.message}`);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Cadastro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Senha</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
          </IonItem>
          <br></br>
          <IonButton expand="block" onClick={handleSubmit} color="primary">
            Cadastrar
          </IonButton>
          <IonButton expand="block" routerLink="/login" color="secondary">
            Já tenho cadastro
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Cadastro;

import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";
import { useHistory } from "react-router-dom";
import { logoGoogle } from "ionicons/icons";

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [currentUser, setCurrentUser] = useState(null);

  function logIn() {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      alert("Login efetuado com sucesso. Redirecionando!");
      history.push("/");
    } catch (err) {
      alert("Usuário ou senha incorretos!");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      alert("Login efetuado com sucesso. Redirecionando!");
      history.push("/tab1");
    } catch (error) {
      alert(
        `Erro ao efetuar login com a conta Google. Motivo: ${error.message}`
      );
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setCurrentUser(currentuser);
      setEmailUser(currentuser.email);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (currentUser) {
    history.push("/tab1");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Bem vindo!</IonTitle>
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
          <br />
          <br />
          <IonButton expand="block" onClick={handleSubmit} color="primary">
            Login
          </IonButton>
          <IonButton expand="block" routerLink="/cadastro" color="secondary">
            Cadastre-se
          </IonButton>
          <IonButton expand="block" onClick={handleGoogleSignIn} color="light">
            <IonIcon slot="start" icon={logoGoogle} />
            Login Com Google
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;

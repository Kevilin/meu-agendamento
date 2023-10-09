import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './MinhaConta.css';
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import {onAuthStateChanged, signOut} from "firebase/auth";
import { useHistory } from 'react-router-dom';

const MinhaConta: React.FC = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);
  const [emailUser, setEmailUser] = useState('');

  function logOut() {
    signOut(auth);
    console.log("Logout realizado. Redirecionando!");
    history.push("/login");
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setCurrentUser(currentuser);
      setEmailUser(currentuser.email);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Minha Conta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Minha Conta</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <p>Email: {emailUser}</p>
          <IonButton onClick={logOut} expand="block" color="danger">Sair</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MinhaConta;

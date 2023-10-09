import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonIcon, IonAvatar } from '@ionic/react';
import './MinhaConta.css';
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import {onAuthStateChanged, signOut} from "firebase/auth";
import { useHistory } from 'react-router-dom';
import { cameraReverseOutline  } from 'ionicons/icons';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const MinhaConta: React.FC = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);
  const [emailUser, setEmailUser] = useState('');
  const [userImage, setUserImage] = useState('');

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


  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });
    const imageUrl = image.webPath;

    setUserImage(imageUrl);
    
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Minha Conta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <>
        <IonAvatar>
          <img alt="Imagem" src={userImage} />          
        </IonAvatar>
        <IonButton onClick={takePhoto} className='botao-camera'>
            <IonIcon aria-hidden="true" icon={cameraReverseOutline} />
          </IonButton>
      </>         
        
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

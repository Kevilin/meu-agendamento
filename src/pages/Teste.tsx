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
    IonImg
  } from "@ionic/react";
  import React, { useState } from "react";
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';



// const Teste: React.FC = () => {
//     const [dataAgenda, setDataAgenda] = useState("");  
    
//     const autenticarComGoogleCalendar = () => {
//         apiCalendar.handleAuthClick();
//     };

//     const criarEvento = () => {
//         const event = {
//             summary: "Reunião de Trabalho",
//             start: {
//               dateTime: "2023-10-10T10:00:00",
//               timeZone: "America/New_York",
//             },
//             end: {
//               dateTime: "2023-10-10T11:00:00",
//               timeZone: "America/New_York",
//             },
//           };
    
//           apiCalendar.createEvent(event).then((response) => {
//             console.log("Evento criado com sucesso!", response);
//           }).catch((error) => {
//             console.error("Erro ao criar o evento:", error);
//           });
    
//     }
    
//     function signUp() {
//        // return createUserWithEmailAndPassword(auth, email, password);
//       }

//     const handleSubmit = async () => {
//         //e.preventDefault();
//         try {
//           //await signUp(email, password);
//           alert("Cadastro criado com sucesso. Redirecionando!");
//          // history.push("/");
//         } catch (error) {
//           //alert(`Erro ao efetuar o Cadastro. Motivo: ${error.message}`);
//         }
//       };
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>meu teste</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent className="ion-padding">
//         <form>
//           <IonItem>
//             <IonLabel position="floating">Data</IonLabel>
//             <IonInput
//               type="date"
//               value={dataAgenda}
//               onIonChange={(e) => setDataAgenda(e.detail.value!)}
//             />
//           </IonItem>

        
         
//           <br></br>
//           <IonButton expand="block" onClick={autenticarComGoogleCalendar} color="primary">
//             Autenticar com o Google Calendar
//           </IonButton>

//           <IonButton expand="block" onClick={criarEvento} color="primary">
//             Criar 
//           </IonButton>
          
//         </form>
//       </IonContent>
//     </IonPage>
//   )
// }

// export default Teste

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


const Teste: React.FC = () => {
    const [userImage, setUserImage] = useState('');

    const takePhoto = async () => {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Base64,
          source: CameraSource.Camera, // ou CameraSource.Photos
        });
      
        const imageSrc = 'data:image/jpeg;base64,' + image.base64String;

        setUserImage(imageSrc);        
        // Faça algo com a imagem, como exibi-la em um elemento <img> ou enviá-la para o servidor.
      };

        return (
            <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={userImage} />
        <IonInput placeholder="Name" />
        <IonButton onClick={takePhoto}>Take Photo</IonButton>
        {/* <IonButton onClick={uploadImage}>Upload Image</IonButton> */}
      </IonContent>
    </IonPage>
        )
//   const image = await Camera.getPhoto({
//     quality: 90,
//     allowEditing: true,
//     resultType: CameraResultType.Uri
//   });

//   // image.webPath will contain a path that can be set as an image src.
//   // You can access the original file using image.path, which can be
//   // passed to the Filesystem API to read the raw data of the image,
//   // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
//   var imageUrl = image.webPath;

//   // Can be set to the src of an image now
//   imageElement.src = imageUrl;  
};

export default Teste
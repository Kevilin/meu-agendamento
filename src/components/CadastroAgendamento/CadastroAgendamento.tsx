import React from 'react';
import {
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonDatetime, 
    IonDatetimeButton, 
    IonModal, 
    IonLabel, 
    IonList, 
    IonItem, 
    IonSelect, 
    IonSelectOption, 
    IonButton, 
    useIonAlert
} from '@ionic/react';

const barbeiros = [
    { value: '1',  nome: 'João Souza' },
    { value: '2',  nome: 'Maria Santos' },
    { value: '3',  nome: 'José Silva' },
    { value: '4',  nome: 'Ryan Matos' },
];

function CadastroAgendamentos() {
    
    const [presentAlert] = useIonAlert();

  return (
    <IonContent className="ion-padding ion-text-center">
        <IonLabel>Data para agendamento:</IonLabel>

        <IonDatetimeButton datetime="datetime"></IonDatetimeButton>

        <IonModal keepContentsMounted={true}>
        <IonDatetime id="datetime"></IonDatetime>
        </IonModal>
        <IonLabel>Barbeiro:</IonLabel>
        <IonList>
        <IonItem>
            <IonSelect aria-label="barbeiro" interface="popover" placeholder="Selecione o barbeiro">
            {barbeiros.map((barbeiro) => (
                <IonSelectOption value={barbeiro.value}> {barbeiro.nome} </IonSelectOption>
            ))}
            </IonSelect>
        </IonItem>
        </IonList>
        <IonLabel>Escolha o serviço</IonLabel>
        <IonList>
        <IonItem>
            <IonSelect aria-label="servicos" placeholder="Selecione todos os serviços que deseja" multiple={true}>
            <IonSelectOption value="barba">Barba</IonSelectOption>
            <IonSelectOption value="cabelo">Cabelo</IonSelectOption>
            <IonSelectOption value="penteado">Penteado</IonSelectOption>
            <IonSelectOption value="sobrancelha">Sobrancelha</IonSelectOption>
            </IonSelect>
        </IonItem>
        </IonList>
        <IonButton
            expand='full'
            onClick={() =>
                presentAlert({
                header: 'Sucesso',
                subHeader: '',
                message: 'Agendamento solicitado!',
                buttons: ['OK'],
                })
            }>
            Salvar Agendamento
        </IonButton>
    </IonContent>
  );
}

export default CadastroAgendamentos;
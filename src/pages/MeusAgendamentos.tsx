import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './MeusAgendamentos.css';
import ListaAgendamentos from '../components/ListaAgendamentos';

const MeusAgendamentos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Meus Agendamentos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Meus Agendamentos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ListaAgendamentos />
      </IonContent>
    </IonPage>
  );
};

export default MeusAgendamentos;

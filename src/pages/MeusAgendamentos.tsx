import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './MeusAgendamentos.css';
import ListaAgendamentos from '../components/ListaAgendamentos/ListaAgendamentos';

const MeusAgendamentos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large" class="ion-text-center">Meus Agendamentos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ListaAgendamentos />
      </IonContent>
    </IonPage>
  );
};

export default MeusAgendamentos;

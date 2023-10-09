import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import CadastroAgendamento from '../components/CadastroAgendamento/CadastroAgendamento';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large" class="ion-text-center">Agendar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <CadastroAgendamento />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

import React from 'react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  calendarNumberOutline,
  listOutline,
  personCircleOutline,
} from 'ionicons/icons';
import Tab1 from './pages/MeusAgendamentos';
import Tab2 from './pages/Tab2';
import MinhaConta from './pages/MinhaConta';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Router>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/cadastro">
          <Cadastro />
        </Route>
        <Route exact path="/tab1">
          <TabsComponent />
        </Route>
        <Route exact path="/tab2">
          <TabsComponent />
        </Route>
        <Route path="/minha-conta">
          <TabsComponent />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Router>
    </IonReactRouter>
  </IonApp>
);

const TabsComponent: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path="/tab1">
        <Tab1 />
      </Route>
      <Route exact path="/tab2">
        <Tab2 />
      </Route>
      <Route path="/minha-conta">
        <MinhaConta />
      </Route>
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
      <IonTabButton tab="tab1" href="/tab1">
        <IonIcon aria-hidden="true" icon={calendarNumberOutline} />
        <IonLabel>Meus agendamentos</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/tab2">
        <IonIcon aria-hidden="true" icon={listOutline} />
        <IonLabel>Agendar</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/minha-conta">
        <IonIcon aria-hidden="true" icon={personCircleOutline} />
        <IonLabel>Minha conta</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default App;

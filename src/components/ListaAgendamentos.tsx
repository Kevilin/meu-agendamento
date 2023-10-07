import React from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
function ListaAgendamentos() {
  return (
    <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>07/10/2023 22:00 com: Ryan</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          First Content
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Second Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Second Content
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Third Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Third Content
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default ListaAgendamentos;
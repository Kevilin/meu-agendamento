import React from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonChip, IonGrid, IonRow, IonCol } from '@ionic/react';
import ItemAgendamento from './ItemAgendamento'; 

/*
function ListaAgendamentos() {
  return (
    <IonAccordionGroup>
      <IonAccordion value="1">
        <IonItem slot="header" color="light">

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonChip color="warning" outline>Pendente</IonChip>
              </IonCol>
              <IonCol>
                <IonChip >10/10/23 22:00</IonChip>
              </IonCol>
            </IonRow>
          </IonGrid>

        </IonItem>
        <div className="ion-padding" slot="content">
          First Content
        </div>
      </IonAccordion>
      <IonAccordion value="2">
        <IonItem slot="header" color="light">

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonChip color="primary" outline>Confirmado</IonChip>
              </IonCol>
              <IonCol>
                <IonChip >08/10/23 22:00</IonChip>
              </IonCol>
            </IonRow>
          </IonGrid>

        </IonItem>
        <div className="ion-padding" slot="content">
          First Content
        </div>
      </IonAccordion>
      <IonAccordion value="3">
        <IonItem slot="header" color="light">

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonChip color="success" outline>Finalizado</IonChip>
              </IonCol>
              <IonCol>
                <IonChip >04/10/23 22:00</IonChip>
              </IonCol>
            </IonRow>
          </IonGrid>

        </IonItem>
        <div className="ion-padding" slot="content">
          First Content
        </div>
      </IonAccordion>
      <IonAccordion value="4">
        <IonItem slot="header" color="light">

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonChip color="danger" outline>Cancelado</IonChip>
              </IonCol>
              <IonCol>
                <IonChip >03/10/23 22:00</IonChip>
              </IonCol>
            </IonRow>
          </IonGrid>

        </IonItem>
        <div className="ion-padding" slot="content">
          First Content
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default ListaAgendamentos;
*/


const agendamentos = [
  { value: '1', status: { label: 'Pendente', color: 'warning' }, date: '10/10/23 22:00' },
  { value: '2', status: { label: 'Confirmado', color: 'primary' }, date: '08/10/23 22:00' },
  { value: '3', status: { label: 'Finalizado', color: 'success' }, date: '04/10/23 22:00' },
  { value: '4', status: { label: 'Cancelado', color: 'danger' }, date: '03/10/23 22:00' },
];

function ListaAgendamentos() {
  return (
    <IonAccordionGroup>
      {agendamentos.map((agendamento) => (
        <ItemAgendamento
          key={agendamento.value}
          value={agendamento.value}
          status={agendamento.status}
          date={agendamento.date}
        />
      ))}
    </IonAccordionGroup>
  );
}

export default ListaAgendamentos;
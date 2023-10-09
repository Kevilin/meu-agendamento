import React from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonChip, IonGrid, IonRow, IonCol } from '@ionic/react';
import ItemAgendamento from './ItemAgendamento'; 

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
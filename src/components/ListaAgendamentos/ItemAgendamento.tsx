import React from 'react';
import { IonAccordion, IonItem, IonGrid, IonRow, IonCol, IonChip } from '@ionic/react';

interface Status {
  label: string;
  color: string;
}

interface ItemAgendamentoProps {
  value: string;
  status: Status;
  date: string;
}

function ItemAgendamento({ value, status, date }: ItemAgendamentoProps) {
  return (
    <IonAccordion value={value}>
      <IonItem slot="header" color="light">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonChip color={status.color} outline>
                {status.label}
              </IonChip>
            </IonCol>
            <IonCol>
              <IonChip>{date}</IonChip>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <div className="ion-padding" slot="content">
        First Content
      </div>
    </IonAccordion>
  );
}
export default ItemAgendamento;
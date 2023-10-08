import React from 'react';
import { IonAccordion, IonItem, IonGrid, IonRow, IonCol, IonChip, IonAvatar, IonLabel, IonIcon, IonList, IonContent } from '@ionic/react';
import { close, closeCircle, pin } from 'ionicons/icons';

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
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonChip>
                                <IonAvatar>
                                    <img alt="Barbeiro" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                </IonAvatar>
                                <IonLabel>Ryan Matos</IonLabel>
                            </IonChip>
                        </IonCol>
                        <IonCol>
                            <IonChip outline>
                                <IonIcon icon={pin} />
                                <IonLabel>Rua X, 123</IonLabel>
                            </IonChip>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonChip color="medium" outline={true}>Barba</IonChip>
                            <IonChip color="medium" outline={true}>Cabelo</IonChip>
                            <IonChip color="medium" outline={true}>Sobrancelha</IonChip>
                            <IonChip color="medium" outline={true}>Penteado</IonChip>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </div>
        </IonAccordion>
    );
}
export default ItemAgendamento;
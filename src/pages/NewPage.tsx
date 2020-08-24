import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonBackButton, IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { add } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';



const NewPage: React.FC<RouteComponentProps> = (props) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>
                        New Page
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                You got to a new page!
                {props.location.pathname}
            </IonContent>
        </IonPage>
    )
}

export default NewPage
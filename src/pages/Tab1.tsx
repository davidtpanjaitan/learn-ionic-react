import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { add } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import { IonSplitPane } from '@ionic/react';
import Menu from '../components/Menu';
import { IonButtons } from '@ionic/react';
import { IonMenuButton } from '@ionic/react';

const Tab1: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonSplitPane contentId="main">
      <Menu />
      <IonPage id="main">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 1</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer name="Tab 1 page" />
          <p>The tab with side menu, tabs, and push navigation</p>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={() => props.history.push('/newPage')}>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default Tab1;

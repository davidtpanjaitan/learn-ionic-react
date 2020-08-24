import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { scan } from 'ionicons/icons';

const Tab2: React.FC = () => {
  const scanQR = async () => {
    let data:{text:string};
    // check if on native platform
    if (window.cordova) {
      data = await BarcodeScanner.scan({
        showTorchButton: true,
        prompt: "Scan your code",
        formats: "QR_CODE",
        resultDisplayDuration: 0
      });
    } else {
      data = {text: 'No cordova in this platform, use a different library'};
      // use a qr library for web here
    }
    alert(`Barcode Data: ${data.text}`);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <p>The tab with qr code scanner</p>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => scanQR()}>
            <IonIcon icon={scan} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

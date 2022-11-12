import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useHistory } from 'react-router';

const GameOver = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quessing Game</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
        
        <IonButton onClick={() => history.push("home") } >Go To Home</IonButton>
        <IonButton onClick={() => history.push("guess") } >Go To Guess</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default GameOver;

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const GameOver = () => {
  const [stat, setStat] = useState({});
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log(location.state);
    setStat((prev) => (prev = location.state));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quessing Game</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="heading">Game Over!</div>


        <div className="img" >

        </div>

        <div className="info">
          You phone needed
           <div className="num"> {stat?.rounds} </div>
          rounds to guess the number <div className="num">{stat?.guess}</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <IonButton shape="round" onClick={() => history.push("/")}>
            Start New Game
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default GameOver;

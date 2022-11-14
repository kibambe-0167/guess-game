import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { useHistory, useLocation } from "react-router";
import "./guessing.css";
import { useEffect, useState } from "react";

const Guess = () => {
  const [guessNum, setGuessNumb] = useState(0);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [logs, setLogs] = useState([]);
  const [userVal, setUserVal] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const [alert_] = useIonAlert();

  function random_(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    let user = location?.state?.uservalue;
    setUserVal((prev) => (prev = user));

    let g = random_(min, max);
    setGuessNumb((prev) => (prev = g));
    let n = logs.concat([g]);
    setLogs([]);
  }, []);

  const lower_ = () => {
    // history.push("/home")
    if (userVal && userVal > guessNum) {
      alert_({
        header: "Hmmmm",
        message: "your number is not lower than the last suggestion",
        buttons: ["Sorry!"],
      });
      history.push("/");
    } else {
      setMax((prev) => (prev = guessNum));
      let gn = random_(min, guessNum);
      let n = logs.concat([guessNum]);
      setGuessNumb((prev) => (prev = gn));
      if (gn == userVal) {
        history.push({
          pathname: "/gameover",
          state: {
            rounds: logs.length + 1,
            guess: userVal,
          },
        });
      }
      n = n.reverse();
      setLogs((prev) => (prev = n));
    }
  };

  const higher_ = () => {
    // history.push("/gameover")
    if (userVal && userVal < guessNum) {
      alert_({
        header: "Hmmmm",
        message: "Your number is not high than the last suggesttion",
        buttons: ["Sorry!"],
      });
      history.push("/");
    } else {
      setMin((prev) => (prev = guessNum));
      let gn = random_(guessNum, max);
      let n = logs.concat([guessNum]);
      setGuessNumb((prev) => (prev = gn));
      if (gn == userVal) {
        history.push({
          pathname: "/gameover",
          state: {
            rounds: logs.length + 1,
            guess: userVal,
          },
        });
      }
      n = n.reverse();
      setLogs((prev) => (prev = n));
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quessing Game</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ backgroundColor: "pink" }}>
          <div className="heading">
            <h1>Opponent's Game</h1>
          </div>

          <div className="gussnumb">{guessNum}</div>

          <div className="status_">
            <h1>Higher or Lower</h1>
            <IonButton shape="round" onClick={() => lower_()}>
              <h1>-</h1>
            </IonButton>

            <IonButton shape="round" onClick={() => higher_()}>
              <h1>+</h1>
            </IonButton>
          </div>

          <div className="logs">
            {logs &&
              logs.length > 0 &&
              logs.reverse().map((val, indx) => (
                <div key={indx} className="log">
                  <div>{`#${logs.length - indx}`}</div>
                  <div>Opponent's Guess:{val}</div>
                </div>
              ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Guess;

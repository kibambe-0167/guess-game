import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home = () => {
  const [val, setVal] = useState(null);
  const history = useHistory();

  useEffect(() => {
    setVal(0);
  }, [])

  function confirm_() {
    if ( val && typeof parseInt(val) == "number") {
      var numb = parseInt(val);
      if (numb > 0 && numb <= 100) {
        // alert("Alright");
        history.push({
          pathname: "/guess",
          state: {
            uservalue: val,
          },
        });
      } else {
        alert("Number Is Out Of Range 1 to 100, only");
      }
    } else {
      alert("Please Provide a number..");
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quessing Game</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <div style={{ backgroundColor: "pink" }}>
          <div className="heading">
            <h1 clas> Guess My Number</h1>
          </div>

          <div className="content">
            <h2>Enter a number</h2>

            <IonInput
              max={100}
              min={1}
              value={val ? val : ""}
              onIonChange={(e) => {
                setVal((prev) => (prev = e.target.value));
              }}
              inputmode="decimal"
              autofocus={true}
              placeholder=""
              type="number"
              style={{}}
            />

            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <IonButton onClick={() => setVal(0)} shape="round" expand="">
                Reset
              </IonButton>
              <IonButton onClick={() => confirm_()} shape="round" expand="">
                Confirm
              </IonButton>
            </div>
          </div>

          {/* <div style={{ textAlign: "center", marginTop: "2em" }}>
            <IonButton onClick={() => history.push("/guess")}>
              Go To Guessing
            </IonButton>
          </div> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

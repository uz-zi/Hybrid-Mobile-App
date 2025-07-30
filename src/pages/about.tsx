import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/react';
import React from 'react';
import './about.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <div className="about-flex">
          <IonText className="about-text">
            <h2>About Field Service App</h2>
            <p>
              Field Service App is a hybrid mobile application designed for field agents
              to easily capture job site photos and GPS locations, and submit them instantly.
            </p>
            <p>
              Built with Ionic React & Capacitor, this cross-platform app ensures secure login,
              offline capabilities (local storage), and a special admin dashboard to track all submissions.
            </p>
          </IonText>

          <IonImg src="/assets/imgs/about-main.jpg" alt="App illustration" className="about-img" />
        </div>

        <IonText>
          <h3>Key Features</h3>
          <ul>
            <li>📸 Capture & upload site images</li>
            <li>📍 Real-time location tracking</li>
            <li>🧑‍💼 Admin-only access to user submissions</li>
            <li>🔒 Role-based login system</li>
          </ul>
        </IonText>

        <IonImg src="/assets/imgs/location-preview.png" alt="Location Screenshot" className="about-img ion-margin-vertical" />

        <IonText>
          <h3>What Our Users Say</h3>
        </IonText>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>⭐⭐⭐⭐⭐ 5/5 - Ahmed Raza</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            “This app made our field data collection so much easier. Simple UI and works offline!”
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>⭐⭐⭐⭐ 4/5 - Fatima Zahra</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            “The GPS map embed is super helpful for tracking field agents. Great work!”
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>⭐⭐⭐⭐⭐ 5/5 - Usman Ali</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            “As an admin, I can see everyone’s submissions with pictures and location. Very useful.”
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default About;

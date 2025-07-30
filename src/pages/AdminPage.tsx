import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonImg,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react';
import React from 'react';
import { logOutOutline } from 'ionicons/icons';
import { submissions } from '../data/submissionData';
import { useHistory } from 'react-router-dom';

const AdminPage: React.FC = () => {
   const history = useHistory();
   const handleLogout = () => {
    localStorage.clear();
    history.replace('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Admin Submissions</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleLogout}>
              <IonIcon icon={logOutOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {submissions.map((sub, index) => (
            <IonItem key={index} lines="full">
              <IonLabel>
                <h2>{sub.username}</h2>
                <p>{sub.date}</p>
                <div style={{ marginTop: 10 }}>
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.google.com/maps?q=${sub.location.lat},${sub.location.lng}&z=15&output=embed`}
                    style={{ border: 0 }}
                  />
                </div>
                <IonImg src={sub.image} style={{ marginTop: 10, borderRadius: 8, height: '200px', objectFit: 'contain' }} />
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AdminPage;

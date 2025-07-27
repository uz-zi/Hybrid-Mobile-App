// src/pages/Signup.tsx

import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput,
  IonItem, IonLabel, IonButton, IonText, useIonViewWillEnter
} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { users } from '../data/userData';
import { useHistory } from 'react-router-dom';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  useIonViewWillEnter(() => {
    setUsername('');
    setPassword('');
    setError('');
    localStorage.clear();
  });

  const handleSignup = () => {
    const exists = users.find(u => u.username === username);
    if (exists) {
      setError('Username already exists');
      return;
    }

    users.push({
      username,
      password,
      role: 'user',
    });

    localStorage.setItem('username', username);
    localStorage.setItem('role', 'user');

    history.push('/home');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput
  value={username}
  onIonInput={(e) => setUsername(e.detail.value ?? '')}
/>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" value={password} onIonInput={(e) => setPassword(e.detail.value ?? '')} />
        </IonItem>

        {error && <IonText color="danger"><p>{error}</p></IonText>}

        <IonButton expand="block" onClick={handleSignup}>Sign Up</IonButton>
        <IonButton expand="block" fill="clear" routerLink="/login">Already have an account? Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Signup;

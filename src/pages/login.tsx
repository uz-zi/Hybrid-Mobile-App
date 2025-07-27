// src/pages/Login.tsx

import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput,
  IonItem, IonLabel, IonButton, IonText, useIonViewWillEnter
} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { users } from '../data/userData';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
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

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('username', user.username);
      localStorage.setItem('role', user.role);
      setError('');

      if (user.role === 'admin') {
        history.push('/admin');
      } else {
        history.push('/home');
      }
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
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

        <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
        <IonButton expand="block" fill="clear" routerLink="/signup">Don't have an account? Sign up</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;

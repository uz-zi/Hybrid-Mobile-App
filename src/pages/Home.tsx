import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonText,
  IonMenuButton,
  IonButtons,
} from '@ionic/react';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import React, { useState } from 'react';
import { submissions } from '../data/submissionData';
import Menu from './menu';

const Home: React.FC = () => {
  const [image, setImage] = useState<string>();
  const [location, setLocation] = useState<{ lat: number; lng: number }>();
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const username = localStorage.getItem('username');

  const takePhoto = async () => {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        quality: 90,
        source: CameraSource.Camera
      });
      setImage(photo.webPath ?? '');
      setSuccess('');
      setError('');
    } catch (err) {
      setError('Unable to access the camera.');
    }
  };

  const getCurrentLocation = async () => {
    try {
      const coords = await Geolocation.getCurrentPosition();
      const newLocation = { lat: coords.coords.latitude, lng: coords.coords.longitude };
      setLocation(newLocation);
      setSuccess('');
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to get location. Please check permissions and HTTPS.');
    }
  };

  const handleSubmit = () => {
    if (!username || !image || !location) {
      setError('Please provide all data: photo, location, and username.');
      setSuccess('');
      return;
    }

    submissions.push({
      username,
      date: new Date().toLocaleString(),
      image,
      location
    });

    setSuccess('Data submitted successfully!');
    setError('');
  };

  return (
    <>
      <Menu />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Field Service App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonButton expand="block" onClick={takePhoto}>Take Job Site Photo</IonButton>
          {image && <IonImg src={image} style={{ height: '300px', width: '100%', objectFit: 'contain' }} />}

          <IonButton expand="block" onClick={getCurrentLocation}>Get Current Location</IonButton>

          {location && (
            <div style={{ marginTop: '16px' }}>
              <iframe
                width="100%"
                height="300"
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
                style={{ border: 0 }}
              />
            </div>
          )}

          <IonButton expand="block" color="success" onClick={handleSubmit}>Submit</IonButton>

          {error && <IonText color="danger"><p>{error}</p></IonText>}
          {success && <IonText color="success"><p>{success}</p></IonText>}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;

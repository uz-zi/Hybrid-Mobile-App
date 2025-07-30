// src/components/Menu.tsx

import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonIcon
} from '@ionic/react';
import { logOutOutline, homeOutline, informationCircleOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import React from 'react';

const Menu: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.replace('/login');
  };

  return (
     <IonMenu side="start" menuId="main" contentId="main-content">
      <IonContent>
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem button routerLink="/home">
              <IonIcon icon={homeOutline} slot="start" />
              <IonLabel>Home</IonLabel>
            </IonItem>

            <IonItem button routerLink="/about">
              <IonIcon icon={informationCircleOutline} slot="start" />
              <IonLabel>About</IonLabel>
            </IonItem>

            <IonItem button onClick={handleLogout}>
              <IonIcon icon={logOutOutline} slot="start" />
              <IonLabel>Logout</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

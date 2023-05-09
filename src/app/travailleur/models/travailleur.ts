
/*export interface Travailleur {
    id: number;
    firstName: string;
    lastName: string;
    departementId: string; // champ pour stocker l'ID du département
    tache: string;
    status: string;
    phoneNumber: string;
    email: string;
    dateOfBirth: string;
  }*/

  import { Departement } from '../../departement/models/departement';

  export interface Travailleur {
    id: number;
    firstName: string;
    lastName: string;
    departementId: number;
    tache: string;
    status: string;
    phoneNumber: string;
    email: string;
    dateOfBirth: string;
    
  }
  

  
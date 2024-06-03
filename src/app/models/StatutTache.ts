import {StatutEtape} from "./StatutEtape";

export enum StatutTache {
  EN_COURS = 0,
  EN_ATTENTE_DE_VALIDATION = 1,
  EN_ATTENTE_DU_DELAI = 2,
  TERMINE = 3
}


export function getStatutTacheFromString(statut :string){
  switch (statut){
    case "EN_COURS":
      return StatutTache.EN_COURS;
    case "EN_ATTENTE_DE_VALIDATION":
      return StatutTache.EN_ATTENTE_DE_VALIDATION;
    case "EN_ATTENTE_DU_DELAI":
      return StatutTache.EN_ATTENTE_DU_DELAI;
    case "TERMINE":
      return StatutTache.TERMINE;
    case "0":
      return StatutTache.EN_COURS;
    case "1":
      return StatutTache.EN_ATTENTE_DE_VALIDATION;
    case "2":
      return StatutTache.EN_ATTENTE_DU_DELAI;
    case "3":
      return StatutTache.TERMINE;
  }
  //default
  return StatutTache.EN_COURS;
}

export function getstatutTacheToString(statut:string) {
  switch (statut){
    case "0":
      return "EN_COURS";
    case "1":
      return "EN_ATTENTE_DE_VALIDATION";
    case "2":
      return "EN_ATTENTE_DU_DELAI";
    case "3":
      return "TERMINE";
  }
  return statut;
}

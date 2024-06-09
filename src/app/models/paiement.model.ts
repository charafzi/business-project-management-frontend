
export interface Paiement{
  idPaiement: number;
  datePaiement: Date;
  total_a_payer: number;
  montantPaye: number;
  reste: number;
  etat: string;
  //justification: string;
  justification: File | null;
}

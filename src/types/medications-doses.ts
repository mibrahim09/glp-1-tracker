export interface MedicationDoses {
  uid: string;
  title: string;
  doses: DosesForm[];
}

export interface DosesForm {
  uid: string;
  dose: string;
}

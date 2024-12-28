export interface MedicationDoses {
  uid: string;
  name: string;
  doses: DosesForm[];
}

export interface DosesForm {
  uid: string;
  name: string;
}

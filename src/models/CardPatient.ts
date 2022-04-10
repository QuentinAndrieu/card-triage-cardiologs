import { Arrhytmia } from 'src/enums/Arrhytmia.enum';
import { Status } from 'src/enums/Status.enum';

export interface CardPatient {
  arrhythmias: Arrhytmia[];
  created_date: Date;
  id: number;
  patient_name: string;
  status: Status;
}

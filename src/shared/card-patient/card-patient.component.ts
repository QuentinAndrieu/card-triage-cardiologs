import { Component, Input } from '@angular/core';
import { Status, StatusColor } from 'src/enums/Status.enum';
import { CardPatient } from 'src/models/CardPatient';

@Component({
  selector: 'ct-card-patient',
  templateUrl: './card-patient.component.html',
  styleUrls: ['./card-patient.component.scss'],
})
export class CardPatientComponent {
  @Input() card: CardPatient | undefined;
  StatusColor = StatusColor;

  getStatusColor(status?: Status): StatusColor {
    return status ? StatusColor[status] : StatusColor.DEFAULT;
  }
}

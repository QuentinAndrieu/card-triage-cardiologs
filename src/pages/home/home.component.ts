import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { PatientService } from 'src/services/patient.service';
import { CardPatient } from 'src/models/CardPatient';
import { Status } from 'src/enums/Status.enum';
import { Store } from '@ngrx/store';
import { Arrhytmia } from 'src/enums/Arrhytmia.enum';
import { Subject, takeUntil } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  onDestroy = new Subject();
  search: string = '';
  cardsDone: CardPatient[] = [];
  cardsToDo: CardPatient[] = [];

  constructor(
    private patientService: PatientService,
    private store: Store<{ search: string }>
  ) {
    store
      .select('search')
      .pipe(takeUntil(this.onDestroy))
      .subscribe((search: string) => (this.search = search));
  }

  ngOnInit(): void {
    this.patientService.getCards().subscribe((cards: CardPatient[]) => {
      this.cardsDone = cards.filter(
        (card: CardPatient) => card.status === Status.DONE
      );
      this.cardsToDo = cards.filter(
        (card: CardPatient) =>
          card.status === Status.PENDING || card.status === Status.REJECTED
      );
    });
  }

  ngOnDestroy(): void {
    this.onDestroy.complete();
  }

  get cardsDoneFilter(): CardPatient[] {
    return this.filterCardsBySearch(this.cardsDone, this.search);
  }

  get cardsToDoFilter(): CardPatient[] {
    return this.filterCardsBySearch(this.cardsToDo, this.search);
  }

  onDrop(event: CdkDragDrop<CardPatient[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.updateStatusCard(event);
    }
  }

  private filterCardsBySearch(
    cards: CardPatient[],
    search: string
  ): CardPatient[] {
    return cards.filter(
      (card: CardPatient) =>
        card.patient_name.toLowerCase().includes(search.toLowerCase()) ||
        card.arrhythmias.find((arrhythmia: Arrhytmia) =>
          arrhythmia.toLowerCase().includes(search.toLowerCase())
        )
    );
  }

  private updateStatusCard(event: CdkDragDrop<CardPatient[]>): void {
    const currentCard: CardPatient = event.container.data[event.currentIndex];

    if (currentCard.status === Status.DONE) {
      const card: CardPatient = this.cardsToDo[event.currentIndex];
      card.status = Status.REJECTED;
    } else {
      const card: CardPatient = this.cardsDone[event.currentIndex];
      card.status = Status.DONE;
    }
  }
}

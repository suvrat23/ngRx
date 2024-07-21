import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {PartService} from './lazy-page.service';
import {Parts} from './lazy-page';
import {ConfirmationService, MessageService} from 'primeng';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AddState} from '../../state/addPart/addPart.reducer';
import * as addPartActions from '../../state/addPart/addPart.actions';
import {selectIsComponent, selectParts} from '../../state/addPart/addPart.selector';
import {take} from 'rxjs/operators';
import {selectError} from '../../state/login/login.selector';
import {updatePartFailure, updatePart, updatePartSuccess} from '../../state/update/update.actions';
import {selectPartsError} from '../../state/update/update.selector';
import {Observable} from 'rxjs';
import * as deleteActions from '../../state/delete/delete.actions';
@Component({
  selector: 'app-lazy-page',
  templateUrl: './lazy-page.component.html',
  styleUrls: ['./lazy-page.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class LazyPageComponent implements OnInit {
  first = 0;
  rows = 10;
  editPart: Parts;
  part: Parts[];
  partDialogVisible = false;
  save = false;
  // parts$: Observable<Parts[]>;
  constructor(private partService: PartService, private confirmationService: ConfirmationService,
              private messageService: MessageService, private store: Store) {
    this.editPart = {} as Parts;
  }
  ngOnInit() {
  this.getParts();
    // this.parts$ = this.store.select(selectParts);
  }


  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.part
      ? this.first === this.part.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.part ? this.first === 0 : true;
  }
  updatePartDialogVisible(visible: boolean) {
    this.partDialogVisible = visible;
  }
  openEditDialog(part: Parts): void {
    this.editPart = { ...part };
    this.partDialogVisible = true;
  }
  // public updatePart(part: Parts): void {
  //   this.partService.updateParts(part.id, part).subscribe(
  //     (response: Parts) => {
  //       console.log(response);
  //       this.getParts();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  //   this.partDialogVisible = false;
  // }
  public updatePart(): void {
    this.store.dispatch(updatePart({ part: {...this.editPart} }));
    this.getParts();
    this.store.select(selectPartsError)
      .pipe(take(1))
      .subscribe((error) => {
        if (error) {
          this.messageService.add({
            severity: 'error',
            summary: 'Update:',
            detail: error
          });
        } else {
          this.closeDialog();
          this.getParts();
        }
      });
    this.getParts();
  }
  //
  // deletePart(id: number): void {
  //   this.partService.deleteParts(id).subscribe(
  //     () => {
  //       console.log('Part deleted successfully');
  //       this.getParts();
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.error('Error deleting part:', error.message);
  //     }
  //   );
  // }
  // deletePartConfirmation(id: number): void {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete this part?',
  //     accept: () => {
  //       this.deletePart(id);
  //     }
  //   });
  // }
  // deletePart(id: number): void {
  //   this.store.dispatch(deleteActions.deletePart({ id }));
  // }

  deletePartConfirmation(id: number): void {
    this.store.dispatch(deleteActions.deletePart({ id }));
    setInterval(() => {
      this.getParts();
    }, 200);
  }
  openAddDialog(): void {
    this.editPart.part_name = '';
    this.editPart.part_description = '';
    this.editPart.created_by = '';
    this.editPart.updated_by = '';
    this.editPart.part_type_code = '';
    this.editPart = {} as Parts;
    this.partDialogVisible = true;
    this.save = true;
  }
  addPart(): void {
    this.store.dispatch(addPartActions.addPart({ parts: {...this.editPart} }));
    if (this.editPart.part_name === undefined || this.editPart.part_description === undefined ||
      this.editPart.part_type_code === undefined || this.editPart.created_by === undefined || this.editPart.updated_by === undefined) {
      this.store.dispatch(addPartActions.isButton({isComponent: false}));
      console.log('hello');
    } else {
      this.store.dispatch(addPartActions.isButton({isComponent: true}));
      console.log('I am running');
    }

    this.store.select(selectIsComponent)
      .subscribe((isComponent) => {
        console.log(isComponent);
        if (isComponent) {
          this.closeDialog();
          this.getParts();
          this.save = false;

        } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Add: ',
              detail: 'For gods sake work :)'
            });
            this.save = true;
        }
      });
    this.getParts();
  }

  closeDialog(): void {
    this.partDialogVisible = false;
    this.getParts();
  }

  public getParts(): void {
    this.partService.getParts().subscribe(
      (res: Parts[]) => {
        this.part = res;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  imgDefault: string = "../../../../assets/img/person.svg";

  dialogRef!: MatDialogRef<DialogComponent>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Usuario) { }

  ngOnInit(): void {
  }

  onNoclick() {
    this.dialogRef.close();
  }

}

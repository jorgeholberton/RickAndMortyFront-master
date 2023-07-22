import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html', 
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

 /*  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {} inyecta los
datos al componente. MAT_DIALOG_DATA ya se encuentra definido dentro 
de angular material, se puede hacer con @Inputs pero sin usar la interfaz */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log(this.data);/*permite mostrar los datos del personaje en consola*/
  }

}

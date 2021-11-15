import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	@Output() personaCreada = new EventEmitter<Persona>();
	
	nombreInput: string = '';
	apellidoInput: string = '';

	agregarPersona(): void{
		let persona1 = new Persona( this.nombreInput, this.apellidoInput);
		this.personaCreada.emit( persona1 );
		this.nombreInput = '';
		this.apellidoInput = '';
	}

}

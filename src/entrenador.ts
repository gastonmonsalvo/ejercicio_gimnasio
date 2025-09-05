import Persona from "./persona";

export default class Entrenador extends Persona{
    private especialidad: string;
    constructor(nombre:string, especialidad:string){

        super();
        this.nombre = nombre;
        this.especialidad = especialidad;

    }
}
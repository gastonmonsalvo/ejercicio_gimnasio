import Entrenador from "./entrenador"
import Socio from "./socio";

export default class ClaseGrupal{

    private nombre:string;
    private horario:number;
    private entrenador:Entrenador;
    private capacidadMax:number;
    private sociosInsciptos: Array<Socio>;

    constructor(nombre:string, horario:number, entrenador : Entrenador, capacidadMax:number){
        this.nombre = nombre;
        this.horario = horario;
        this.entrenador = entrenador;
        this.capacidadMax = capacidadMax;
        this.sociosInsciptos = [];
    }

}
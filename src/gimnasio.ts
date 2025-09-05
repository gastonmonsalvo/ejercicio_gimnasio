
import ClaseGrupal from "./claseGrupal";
import Entrenador from "./entrenador";
import Socio from "./socio"
        
export default class Gimnasio{

    private socios : Array<Socio>;
    private entrenadores : Array<Entrenador>;
    private clases : Array<ClaseGrupal>;

    constructor(){
        this.socios = [];
        this.entrenadores = [];
        this.clases = [];
    }

    public agregarSocio(socio:Socio):void{
        this.socios.push(socio);
    }
    public agregarEntrenador(entrenador:Entrenador):void{
        this.entrenadores.push(entrenador);
    }
    public eliminarSocioPorId( socioAEliminar : Socio):void{
        const idSocio : number = socioAEliminar.getId();
        this.socios = this.socios.filter((socio) => socio.getId() != idSocio);
       
    }
    public eliminarEntrenadorPorId(entrenadorAEliminar : Socio):void{
        const idEntrenador: number = entrenadorAEliminar.getId();
    
    }

}
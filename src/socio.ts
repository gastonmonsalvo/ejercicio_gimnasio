import Persona from "./persona";
import PlanDeEntrenamiento from "./planDeEntrenamiento";

export default abstract class Socio extends Persona {
  protected id: number;
  protected planDeEntrenamiento: PlanDeEntrenamiento = undefined as unknown as PlanDeEntrenamiento ;
  protected cuotaAlDia: boolean;

    
    constructor(nombre: string, id: number, cuotaAlDia: boolean){
    
        super();
        this.nombre = nombre;
        this.id = id;
        this.cuotaAlDia = cuotaAlDia;
    }


    public setPlanDeEntrenamiento(planDeEntrenamiento : PlanDeEntrenamiento) : void{
        this.planDeEntrenamiento = planDeEntrenamiento;
    }  // :) 

    public getId():number{
        return this.id;
    }
    public getCuotaAlDia():boolean{
        return this.cuotaAlDia;
    }
    public getplanDeEntrenamiento():PlanDeEntrenamiento{
        return this.planDeEntrenamiento;
    }

   
 

}

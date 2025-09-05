export default abstract class Persona{

    protected nombre: string ;

    constructor(){
        this.nombre = "";
    }

    public setNombre(nombre:string):void{
        this.nombre=nombre;
    }
    public getNombre():string {
        return this.nombre;
    }

}
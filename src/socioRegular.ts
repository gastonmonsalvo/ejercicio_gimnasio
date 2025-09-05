import Socio from "./socio";

export default class SocioRegular extends Socio{
  private cantClasesInscriptas: number;

  constructor(nombre: string, id: number, cuotaAlDia: boolean) {
    super(nombre,id, cuotaAlDia);

    this.cantClasesInscriptas = 0;
  }

}
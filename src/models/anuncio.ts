export class Anuncio {
    _id?: number;
    dia: number;
    mes: string;
    titulo: string;
    descripcion: string;
    precio: number;


    constructor(dia: number, mes: string, titulo: string, descripcion: string, precio: number ){
        this.dia = dia;
        this.mes = mes;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio= precio;

    }
}
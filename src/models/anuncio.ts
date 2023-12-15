export class Anuncio {
    _id?: number;
    dia: number;
    mes: string;
    titulo: string;
    descripcion: string;
    precio: string;


    constructor(dia: number, mes: string, titulo: string, descripcion: string, precio: string ){
        this.dia = dia;
        this.mes = mes;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio= precio;

    }
}
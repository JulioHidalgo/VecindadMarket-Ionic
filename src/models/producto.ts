export class Producto {
    _id?: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    thumbnail: object;
    images: object;


    constructor(name: string, category: string, stock: number, price: number, thumbnail: object, images: object ){
        this.name = name;
        this.category = category;
        this.stock = stock;
        this.price = price;
        this.thumbnail = thumbnail;
        this.images = images;
    }
}
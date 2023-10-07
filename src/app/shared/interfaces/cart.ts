export interface Cart {
    numOfCartItems:number;
    data:Data;
    status:string;
}

interface Data{
    totalCartPrice:number;
    products:ProductItem[];
}

export interface ProductItem {
    count:number;
    price:number;
    product:Pdt;

}

interface Pdt {
    imageCover:string;
    id:string;
    title:string;
    category:Category
}
interface Category{
    name:string;
}
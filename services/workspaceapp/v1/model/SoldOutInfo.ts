

export class SoldOutInfo {
    public products?: Array<string>;
    public constructor() { 
    }
    public withProducts(products: Array<string>): SoldOutInfo {
        this['products'] = products;
        return this;
    }
}
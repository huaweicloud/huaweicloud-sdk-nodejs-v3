

export class ProductUrlInfo {
    public url?: string;
    public constructor() { 
    }
    public withUrl(url: string): ProductUrlInfo {
        this['url'] = url;
        return this;
    }
}
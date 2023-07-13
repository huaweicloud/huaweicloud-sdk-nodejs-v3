

export class ListOsVersionsRequest {
    public tag?: string;
    public constructor() { 
    }
    public withTag(tag: string): ListOsVersionsRequest {
        this['tag'] = tag;
        return this;
    }
}
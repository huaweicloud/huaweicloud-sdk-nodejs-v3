

export class Model {
    public name?: string;
    public url?: string;
    private 'quant_type'?: string;
    public constructor() { 
    }
    public withName(name: string): Model {
        this['name'] = name;
        return this;
    }
    public withUrl(url: string): Model {
        this['url'] = url;
        return this;
    }
    public withQuantType(quantType: string): Model {
        this['quant_type'] = quantType;
        return this;
    }
    public set quantType(quantType: string  | undefined) {
        this['quant_type'] = quantType;
    }
    public get quantType(): string | undefined {
        return this['quant_type'];
    }
}


export class NonRequiredName {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): NonRequiredName {
        this['name'] = name;
        return this;
    }
}


export class LocalObjectReference {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): LocalObjectReference {
        this['name'] = name;
        return this;
    }
}
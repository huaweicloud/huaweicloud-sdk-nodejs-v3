

export class Name {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): Name {
        this['name'] = name;
        return this;
    }
}
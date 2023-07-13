

export class AssumeroleSessionuser {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): AssumeroleSessionuser {
        this['name'] = name;
        return this;
    }
}
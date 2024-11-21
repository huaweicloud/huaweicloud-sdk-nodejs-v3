

export class Recommendation {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): Recommendation {
        this['name'] = name;
        return this;
    }
}
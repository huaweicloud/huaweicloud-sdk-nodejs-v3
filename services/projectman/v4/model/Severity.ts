

export class Severity {
    public name?: string;
    public id?: number;
    public constructor() { 
    }
    public withName(name: string): Severity {
        this['name'] = name;
        return this;
    }
    public withId(id: number): Severity {
        this['id'] = id;
        return this;
    }
}
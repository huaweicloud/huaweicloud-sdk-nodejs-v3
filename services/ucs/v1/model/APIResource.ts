

export class APIResource {
    public name?: string;
    public kind?: string;
    public constructor() { 
    }
    public withName(name: string): APIResource {
        this['name'] = name;
        return this;
    }
    public withKind(kind: string): APIResource {
        this['kind'] = kind;
        return this;
    }
}
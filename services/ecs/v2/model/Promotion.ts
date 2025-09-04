

export class Promotion {
    public type?: string;
    public id?: string;
    public constructor(type?: string, id?: string) { 
        this['type'] = type;
        this['id'] = id;
    }
    public withType(type: string): Promotion {
        this['type'] = type;
        return this;
    }
    public withId(id: string): Promotion {
        this['id'] = id;
        return this;
    }
}
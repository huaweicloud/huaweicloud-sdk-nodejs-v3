

export class IdInfo {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): IdInfo {
        this['id'] = id;
        return this;
    }
}
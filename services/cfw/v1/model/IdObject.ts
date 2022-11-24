

export class IdObject {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): IdObject {
        this['id'] = id;
        return this;
    }
}
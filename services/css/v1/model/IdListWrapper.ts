

export class IdListWrapper {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): IdListWrapper {
        this['id'] = id;
        return this;
    }
}
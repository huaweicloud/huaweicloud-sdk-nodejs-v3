

export class ResourceID {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ResourceID {
        this['id'] = id;
        return this;
    }
}
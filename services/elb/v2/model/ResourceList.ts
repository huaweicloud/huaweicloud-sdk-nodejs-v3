

export class ResourceList {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): ResourceList {
        this['id'] = id;
        return this;
    }
}
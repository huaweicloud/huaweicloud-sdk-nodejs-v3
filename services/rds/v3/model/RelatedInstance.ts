

export class RelatedInstance {
    public id?: string;
    public type?: string;
    public constructor(id?: string, type?: string) { 
        this['id'] = id;
        this['type'] = type;
    }
    public withId(id: string): RelatedInstance {
        this['id'] = id;
        return this;
    }
    public withType(type: string): RelatedInstance {
        this['type'] = type;
        return this;
    }
}
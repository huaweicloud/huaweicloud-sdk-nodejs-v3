

export class PublicPoolType {
    public id?: string;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): PublicPoolType {
        this['id'] = id;
        return this;
    }
    public withType(type: string): PublicPoolType {
        this['type'] = type;
        return this;
    }
}
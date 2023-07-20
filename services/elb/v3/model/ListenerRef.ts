

export class ListenerRef {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ListenerRef {
        this['id'] = id;
        return this;
    }
}
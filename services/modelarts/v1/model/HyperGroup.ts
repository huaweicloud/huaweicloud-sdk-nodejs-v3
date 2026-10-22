

export class HyperGroup {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): HyperGroup {
        this['id'] = id;
        return this;
    }
}
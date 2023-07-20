

export class ScopedToken {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ScopedToken {
        this['id'] = id;
        return this;
    }
}
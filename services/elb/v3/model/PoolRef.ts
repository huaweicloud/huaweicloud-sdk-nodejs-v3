

export class PoolRef {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): PoolRef {
        this['id'] = id;
        return this;
    }
}
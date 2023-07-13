

export class SubnetList {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): SubnetList {
        this['id'] = id;
        return this;
    }
}


export class ServerId {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): ServerId {
        this['id'] = id;
        return this;
    }
}
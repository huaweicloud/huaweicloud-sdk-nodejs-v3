

export class Id {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): Id {
        this['id'] = id;
        return this;
    }
}
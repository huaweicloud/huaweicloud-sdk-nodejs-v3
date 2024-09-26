

export class UUID32Identifier {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UUID32Identifier {
        this['id'] = id;
        return this;
    }
}
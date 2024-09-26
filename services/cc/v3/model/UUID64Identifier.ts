

export class UUID64Identifier {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UUID64Identifier {
        this['id'] = id;
        return this;
    }
}
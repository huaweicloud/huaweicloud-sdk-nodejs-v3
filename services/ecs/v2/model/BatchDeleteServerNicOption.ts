

export class BatchDeleteServerNicOption {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): BatchDeleteServerNicOption {
        this['id'] = id;
        return this;
    }
}
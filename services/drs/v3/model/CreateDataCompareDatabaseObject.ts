

export class CreateDataCompareDatabaseObject {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): CreateDataCompareDatabaseObject {
        this['id'] = id;
        return this;
    }
}
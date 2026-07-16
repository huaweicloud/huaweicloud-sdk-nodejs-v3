

export class BatchActionDevServerIds {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): BatchActionDevServerIds {
        this['id'] = id;
        return this;
    }
}
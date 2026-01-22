

export class BatchDeleteServiceSetsRespData {
    public name?: string;
    public id?: string;
    public constructor() { 
    }
    public withName(name: string): BatchDeleteServiceSetsRespData {
        this['name'] = name;
        return this;
    }
    public withId(id: string): BatchDeleteServiceSetsRespData {
        this['id'] = id;
        return this;
    }
}
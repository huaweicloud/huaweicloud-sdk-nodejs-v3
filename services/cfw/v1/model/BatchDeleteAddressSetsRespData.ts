

export class BatchDeleteAddressSetsRespData {
    public name?: string;
    public id?: string;
    public constructor() { 
    }
    public withName(name: string): BatchDeleteAddressSetsRespData {
        this['name'] = name;
        return this;
    }
    public withId(id: string): BatchDeleteAddressSetsRespData {
        this['id'] = id;
        return this;
    }
}
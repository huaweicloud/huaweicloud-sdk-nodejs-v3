

export class ChInstancesInfoRsponseInstanceParamGroup {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ChInstancesInfoRsponseInstanceParamGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ChInstancesInfoRsponseInstanceParamGroup {
        this['name'] = name;
        return this;
    }
}
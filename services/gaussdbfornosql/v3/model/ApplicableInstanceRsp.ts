

export class ApplicableInstanceRsp {
    public id?: string;
    public name?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): ApplicableInstanceRsp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ApplicableInstanceRsp {
        this['name'] = name;
        return this;
    }
}
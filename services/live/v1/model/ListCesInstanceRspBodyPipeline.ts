

export class ListCesInstanceRspBodyPipeline {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ListCesInstanceRspBodyPipeline {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListCesInstanceRspBodyPipeline {
        this['name'] = name;
        return this;
    }
}
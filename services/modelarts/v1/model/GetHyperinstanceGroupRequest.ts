

export class GetHyperinstanceGroupRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): GetHyperinstanceGroupRequest {
        this['id'] = id;
        return this;
    }
}
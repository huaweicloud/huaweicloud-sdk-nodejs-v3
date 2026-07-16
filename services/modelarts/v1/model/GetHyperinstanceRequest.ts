

export class GetHyperinstanceRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): GetHyperinstanceRequest {
        this['id'] = id;
        return this;
    }
}
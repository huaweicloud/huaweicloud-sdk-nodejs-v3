

export class GetHyperClusterRequest {
    public id?: string;
    public type?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): GetHyperClusterRequest {
        this['id'] = id;
        return this;
    }
    public withType(type: string): GetHyperClusterRequest {
        this['type'] = type;
        return this;
    }
}
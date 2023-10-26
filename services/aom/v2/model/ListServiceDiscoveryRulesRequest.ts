

export class ListServiceDiscoveryRulesRequest {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): ListServiceDiscoveryRulesRequest {
        this['id'] = id;
        return this;
    }
}
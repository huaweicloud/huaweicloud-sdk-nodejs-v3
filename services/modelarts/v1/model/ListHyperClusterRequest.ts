

export class ListHyperClusterRequest {
    public type?: string;
    public constructor() { 
    }
    public withType(type: string): ListHyperClusterRequest {
        this['type'] = type;
        return this;
    }
}


export class DeleteHyperClusterRequest {
    public id?: string;
    public type?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteHyperClusterRequest {
        this['id'] = id;
        return this;
    }
    public withType(type: string): DeleteHyperClusterRequest {
        this['type'] = type;
        return this;
    }
}


export class RegisterClusterGroupSpec {
    public clusterIds?: Array<string>;
    public description?: string;
    public constructor() { 
    }
    public withClusterIds(clusterIds: Array<string>): RegisterClusterGroupSpec {
        this['clusterIds'] = clusterIds;
        return this;
    }
    public withDescription(description: string): RegisterClusterGroupSpec {
        this['description'] = description;
        return this;
    }
}
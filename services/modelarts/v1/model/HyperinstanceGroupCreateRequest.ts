

export class HyperinstanceGroupCreateRequest {
    public name?: string;
    private 'hyperinstance_cluster_id'?: string;
    public constructor(name?: string, hyperinstanceClusterId?: string) { 
        this['name'] = name;
        this['hyperinstance_cluster_id'] = hyperinstanceClusterId;
    }
    public withName(name: string): HyperinstanceGroupCreateRequest {
        this['name'] = name;
        return this;
    }
    public withHyperinstanceClusterId(hyperinstanceClusterId: string): HyperinstanceGroupCreateRequest {
        this['hyperinstance_cluster_id'] = hyperinstanceClusterId;
        return this;
    }
    public set hyperinstanceClusterId(hyperinstanceClusterId: string  | undefined) {
        this['hyperinstance_cluster_id'] = hyperinstanceClusterId;
    }
    public get hyperinstanceClusterId(): string | undefined {
        return this['hyperinstance_cluster_id'];
    }
}


export class ShowSubmissionsRequest {
    private 'cluster_id'?: string;
    public jname?: string;
    public constructor(clusterId?: string, jname?: string) { 
        this['cluster_id'] = clusterId;
        this['jname'] = jname;
    }
    public withClusterId(clusterId: string): ShowSubmissionsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withJname(jname: string): ShowSubmissionsRequest {
        this['jname'] = jname;
        return this;
    }
}
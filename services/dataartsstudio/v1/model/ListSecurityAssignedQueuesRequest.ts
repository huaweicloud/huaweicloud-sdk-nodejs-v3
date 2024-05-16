

export class ListSecurityAssignedQueuesRequest {
    public workspace?: string;
    public type?: string;
    private 'cluster_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityAssignedQueuesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withType(type: string): ListSecurityAssignedQueuesRequest {
        this['type'] = type;
        return this;
    }
    public withClusterId(clusterId: string): ListSecurityAssignedQueuesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withLimit(limit: number): ListSecurityAssignedQueuesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityAssignedQueuesRequest {
        this['offset'] = offset;
        return this;
    }
}
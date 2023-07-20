

export class DeleteSnapshotPolicyRequest {
    private 'cluster_id'?: string;
    public id?: string;
    public constructor(clusterId?: string, id?: string) { 
        this['cluster_id'] = clusterId;
        this['id'] = id;
    }
    public withClusterId(clusterId: string): DeleteSnapshotPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withId(id: string): DeleteSnapshotPolicyRequest {
        this['id'] = id;
        return this;
    }
}